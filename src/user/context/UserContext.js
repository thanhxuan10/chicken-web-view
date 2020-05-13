import React, { Component } from 'react'

export const UserContext = React.createContext()

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            item: {
                name: '',
                description: '',
                price: '0',
                quantity: 0,
                types: '',
                brand: '',
                source: '',
                storeId: localStorage.getItem("id")
            },
            modal3: true,
        }

       
        this.getProduct = this.getProduct.bind(this)
        this.onChange = this.onChange.bind(this)
        this.togglecart = this.togglecart.bind(this)
    }

    componentDidMount() {
        fetch(`/user/product/getProducts`).then(res => res.json()).then(json => {
            this.setState({
                items: json,
               
            }
            )
            console.log(json)
        })
    }

    togglecart() {
        this.setState({
            modal3: !this.state.modal3
        })
    }
    
    onChange(e) {
        if (this.state.item) {
            var item = this.state.item
            item[e.target.name] = e.target.value
            this.setState({ item })
        }
    }

    getProduct(pId) {
        this.toggle()
        fetch(`/user/product/getProducts?id=${pId}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json[0]
                })
            })
        console.log(this.state)
    }

    render() {
        const { items, item, modal3} = this.state

        return <UserContext.Provider value={{
            items,
            item,
            modal3,
            
            onChange: this.onChange,
            togglecart: this.togglecart,
            getProduct: this.getProduct
            
        }}>
            {this.props.children}
        </UserContext.Provider>
    }
}