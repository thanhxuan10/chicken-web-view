import React, { useState } from 'react';
import {
    Modal,
    Button,
    Label,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from "reactstrap";
import { ProductContext } from '../../context/ProductContext'



export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: [],
            count: 0
        }
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        }

        )
    }
    decrease() {
        this.setState({
            count: this.state.count - 1
        }

        )
    }
    componentDidMount() {
        fetch(`/user/product/getProducts`).then(res => res.json()).then(json => {
            this.setState({
                item: json
            })
        })
    }
    render() {
        var { item } = this.state
        return (
            <div>
                <ProductContext.Consumer>
                    {({ togglecart }) =>
                        <div>
                            <ModalHeader className="d-flex justify-content-center">Bill 1</ModalHeader>
                            <ModalBody className="justify-content-center align-items-center p-4">
                                <Label for="name">Tên sản phẩm: P1</Label> <br />
                                <Label for="quantity">Số lượng: 100</Label> <br />
                                <Label for="description">Nội dung sản phẩm: Demo P1</Label> <br />
                                <Label for="price"> Giá sản phẩm: 100.000</Label> <br />
                                <Button color="primary" className="m-1" onClick={() => this.increase()}>+</Button>
                                <span>{this.state.count}</span>
                                <Button color="primary" className="m-1" onClick={() => this.decrease()}>-</Button>
                            </ModalBody>
                            <ModalFooter>

                                <div className="mt-auto ml-auto">
                                    <Button color="primary" className="m-1" >Thêm vào giỏ hàng</Button>
                                    <Button color="secondary" onClick={togglecart} >Thoát</Button>
                                </div>
                            </ModalFooter>
                        </div>
                    }
                </ProductContext.Consumer>

            </div>



        );
    }
};

