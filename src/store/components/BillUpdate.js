import React, { Component } from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button, Input, Label, FormGroup } from 'reactstrap'

import { ProductContext } from '../../context/ProductContext'


export default class extends Component {
    render() {
        return (
            <div>
                <ModalHeader  className="d-flex justify-content-center">Bill Update</ModalHeader>
                <ModalBody className="justify-content-center align-items-center p-4">

                    <FormGroup>
                        <Label for="name">ID đơn hàng:</Label>
                        <Input type="text" placeholder="ID"   > </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantity">Tên người nhận:</Label>
                        <Input type="number" placeholder="Tên người nhận" ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Sản phẩm:</Label>
                        <Input type="text" placeholder="thông tin sản phẩm"  ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Địa chỉ:</Label>
                        <Input type="number" placeholder="Địa chỉ"  ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="types">Số điện thoại:</Label>
                        <Input type="text" placeholder="Số điện thoại" ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="types"> Tổng số tiền:</Label>
                        <Input type="number" placeholder="Tổng số tiền" ></Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <div className="mt-auto ml-auto">
                        <Button className="m-1" >Thoát</Button>
                        <Button className="m-1" >Cập nhật</Button>
                    </div>
            </ModalFooter>

            </div >
        )
    }
}