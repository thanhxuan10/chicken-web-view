import React from 'react'
import { Redirect } from 'react-router-dom'

export const BillContext = React.createContext()

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            item: null
        }
        this.getBill = this.getBill.bind(this)
    }
    componentDidMount() {
        fetch(`/store/bill/getBills?storeId=${localStorage.getItem("id")}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            })
        //console.log(this.state)
    }
    getBill(bill) {
        this.setState({
            item: bill
        })

    }
    render() {
        const { items,item } = this.state
        return <BillContext.Provider value={{
            items,
            item,
            getBill: this.getBill
        }}>
            {this.props.children}
        </BillContext.Provider>
    }
}
