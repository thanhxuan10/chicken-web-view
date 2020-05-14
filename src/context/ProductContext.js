import React, { Component } from 'react'

export const ProductContext = React.createContext()

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            product: {
                name: '',
                description: '',
                price: '0',
                quantity: 0,
                types: '',
                brand: '',
                source: '',
                storeId: localStorage.getItem("id")
            },
            modal: false,
            modal1: false,
            modal2: true,
            modalbill: false
        }

        this.deleteProduct = this.deleteProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.onChange = this.onChange.bind(this)
        this.toggle = this.toggle.bind(this)
        this.toggleinsert = this.toggleinsert.bind(this)
        this.insertProduct = this.insertProduct.bind(this)
        this.togglebill = this.togglebill.bind(this)
        this.togglebillupdate = this.togglebillupdate.bind(this)
        this.billProduct = this.billProduct.bind(this)
    }

    componentDidMount() {
        fetch(`/user/product/getProducts?store=${localStorage.getItem("id")}`).then(res => res.json()).then(json => {
            this.setState({
                products: json
            })
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    togglebillupdate() {
        this.setState({
            modal2: !this.state.modal2
        })
    }
    togglebill() {
        this.setState({
            modalbill: !this.state.modalbill
        })
    }
    toggleinsert() {
        this.setState({
            modal1: !this.state.modal1,
            product: {
                name: '',
                description: '',
                price: '0',
                quantity: 0,
                types: '',
                brand: '',
                source: '',
                storeId: localStorage.getItem("id")
            }
        })
    }

    deleteProduct(pId) {
        fetch(`/store/product/delete?id=${pId}`)
            .then(res => res.json())
            .then(json => {
                const withOutId = this.state.products.filter(item => item.id !== pId)
                this.setState({
                    products: withOutId
                })
                alert(`${json.success ? "Update successful" : json.error}`)
            }).catch(e => alert("Fail to update"))
    }

    async insertProduct() {
        const product = this.state.product

        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }

        await fetch('/store/product/create', requestOption)
            .then(res => res.json())
            .then(json => alert(`${json.success ? "Insert successful" : json.error}`))
            .catch(e => alert("Fail to insert"))
        await this.setState({
            products: [...this.state.products, product]
        })

        await this.toggleinsert()
    }
    async billProduct(){
       // await this.togglebillupdate()
    }
    async updateProduct() {
        const product = this.state.product

        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }

        await fetch('/store/product/update', requestOption)
            .then(res => res.json())
            .then(json => alert(`${json.success ? "Update successful" : json.error}`))
            .catch(e => alert("Fail to update"))

        const withOutId = this.state.products.filter(x => x.id !== product.id)
        await this.setState({
            products: [...withOutId, product]
        })

        await this.toggle()
    }

    onChange(e) {
        if (this.state.product) {
            var product = this.state.product
            product[e.target.name] = e.target.value
            this.setState({ product })
        }
    }

    getProduct(pId) {
        this.toggle()
        fetch(`/user/product/getProducts?id=${pId}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    product: json[0]
                })
            })
        console.log(this.state)
    }

    render() {
        const { products, product, modal, modal1, modalbill, modal2, modal4} = this.state

        return <ProductContext.Provider value={{
            products,
            product,
            modal,
            modal1,
            modalbill,
            modal2,
            togglebillupdate: this.togglebillupdate,
            billProduct: this.billProduct,
            togglebill: this.togglebill,
            deleteProduct: this.deleteProduct,
            updateProduct: this.updateProduct,
            getProduct: this.getProduct,
            onChange: this.onChange,
            toggle: this.toggle,
            insertProduct: this.insertProduct,
            toggleinsert: this.toggleinsert
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}