import React from 'react'

export const CartContext = React.createContext()

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            product: null,
            count: 0,
            total_price: "0",
            phone: "",
            address: "",
            modal: false,
            lx: 0,
            ly: 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.chooseProduct = this.chooseProduct.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
        this.onChange = this.onChange.bind(this)
        this.toggle = this.toggle.bind(this)
        this.order = this.order.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange(e) {
        var name = e.target.name
        if(name == "quantity") {
            let product = this.state.product
            let value = e.target.value
            if(value == "") {
                product.quantity = 0
            } else {
                if(product.quantity == 0) {
                    product.quantity = JSON.parse(value.slice(1))
                }
                else {
                    product.quantity = JSON.parse(value)
                }
            }
            this.setState({
                product
            })
        } else {
            this.setState({
                [name]: e.target.value
            })
        }
    }

    increase() {
        let {product} = this.state
        product.quantity += 1
        this.setState({product})
    }

    decrease() {
        let {product} = this.state
        product.quantity -= 1
        this.setState({product})
    }

    chooseProduct(product) {
        product.quantity = 1
        this.setState({product})
    }

    async addToCart() {
        let {product, products} = this.state
        const existProduct = await products.filter(x => x.id == product.id)[0]
        if(existProduct) {
            const withOutProducts = products.filter(x => x.id != product.id)
            existProduct.quantity += product.quantity
            products = [...withOutProducts, existProduct]
        } else {
            products = [...products, product]
        }
        
        await this.setState({
            products,
            count: this.state.count + product.quantity,
            total_price: JSON.stringify(JSON.parse(this.state.total_price) + JSON.parse(product.price) * product.quantity)
        })

        await console.log(this.state.products)
    }

    removeFromCart(product) {
        const withOutProducts = this.state.products.filter(x => x.id != product.id)
        this.setState({
            products: withOutProducts,
            count: this.state.count - product.quantity
        })
    }

    async order() {
        
        await navigator.geolocation.getCurrentPosition(position => this.setState({
            ly: position.coords.latitude,
            lx: position.coords.longitude,
        }))

        let {products, lx, ly, phone, address} = this.state
        products = await products.map(item => {return {[`${item.id}`]: item.quantity}})
        const data = {
            userId: localStorage.getItem("id"),
            address,
            lx,
            ly,
            phone,
            products
        }

        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        await fetch('/store/bill/create', requestOption)
        .then(res => res.json())
        .then(json => alert(`Đặt hàng thành công, mã đơn hàng của bạn là ${json.billId}`))

        await this.toggle()
    }

    render() {
        const {products, product, count, modal, total_price, phone, address} = this.state
        return (
            <CartContext.Provider value={{
                products: products,
                product: product,
                count: count,
                total_price: total_price,
                modal: modal,
                phone: phone,
                address: address,
                increase: this.increase,
                decrease: this.decrease,
                chooseProduct: this.chooseProduct,
                addToCart: this.addToCart,
                removeFromCart: this.removeFromCart,
                onChange: this.onChange,
                toggle: this.toggle,
                order: this.order
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}