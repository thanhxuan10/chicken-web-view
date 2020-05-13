
import React, { Component } from 'react';
import { Label, ModalHeader, ModalFooter, Button, Input, FormGroup, ModalBody } from 'reactstrap';
import { ProductContext } from '../../context/ProductContext'

class InsertForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeId: localStorage.getItem("id"),
            name: '',
            quantity: 1,
            description: '',
            price: 1,
            types: 'thực phẩm',
            source: '',
            brand: ''
        }
    }

    render() {
        return (


            <div>
                <ProductContext.Consumer>
                    {({ toggle2 }) =>
                        <div>
                            <ModalHeader className="d-flex justify-content-center"> Thanh toán</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="name">Nhập tên người nhận</Label>
                                    <Input type="text" placeholder="Tên người nhận" id="name" name="name"   ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="quantity">Nhập địa chỉ người nhận:</Label>
                                    <Input type="number" placeholder="Địa chỉ người nhận" id="quantity" name="quantity"  ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Nhập số điện thoại người nhận:</Label>
                                    <Input type="text" placeholder="Số điện thoại" id="description" name="description" ></Input>
                                </FormGroup>
                                <h2 className="text-danger">>Tổng tiền là: </h2>

                            </ModalBody>

                            <ModalFooter>
                                <Button className="w-100">Thanh toán</Button>
                                <Button className="w-100 " onClick={toggle2}>Thoát</Button>
                            </ModalFooter>
                        </div>
                    }
                </ProductContext.Consumer>
            </div >

        )
    }
}


export default InsertForm