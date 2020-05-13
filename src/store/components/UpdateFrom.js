import React, { Component } from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button, Input, Label, FormGroup, CardImg, Col } from 'reactstrap'

import { ProductContext } from '../../context/ProductContext'


export default class extends Component {
    render() {
        return (
            <div>
                <ModalHeader className="d-flex justify-content-center" >Update</ModalHeader>
                <ProductContext.Consumer>
                    {({ product, onChange }) => {
                        if (product) {
                            return (
                                <ModalBody className="justify-content-center align-items-center p-4">
                                    <Col lg="6" className="justify-content-center align-items-center p-4" >
                                        <CardImg
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}

                                            top
                                            width="100%"
                                            src="/images?image=default.jpg"
                                            alt="Card image cap"
                                        />
                                    </Col>
                                    <FormGroup>
                                        <Label for="name">Nhập tên sản phẩm:</Label>
                                        <Input type="text" placeholder="tên sản phẩm" id="name" name="name" value={product.name} onChange={onChange} > </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="quantity">Nhập số lượng sản phẩm</Label>
                                        <Input type="number" placeholder="số lượng" id="quantity" name="quantity" value={product.quantity} onChange={onChange} ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Nhập thông tin sản phẩm</Label>
                                        <Input type="text" placeholder="thông tin sản phẩm" id="description" name="description" value={product.description} onChange={onChange} ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="price">Nhập giá sản phẩm</Label>
                                        <Input type="number" placeholder="giá" id="price" name="price" value={product.price} onChange={onChange} ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="types">Nhập loại sản phẩm</Label>
                                        <Input type="select" name="select" id="exampleSelect" onChange={onChange} >
                                            <option value="thực phẩm">thực phẩm</option>
                                            <option value="thuốc">thuốc</option>
                                            <option value="vắc xin">vắc xin</option>
                                        </Input>
                                    </FormGroup>
                                </ModalBody>
                            )
                        }
                    }}
                </ProductContext.Consumer>

                <ModalFooter>
                    <ProductContext.Consumer>
                        {({ updateProduct }) => (
                            <div className="mt-auto ml-auto">
                                <Button className="m-1" onClick={this.props.exit}>Thoát</Button>
                                <Button className="m-1" onClick={() =>
                                    updateProduct()
                                }>Cập nhật</Button>
                            </div>
                        )}
                    </ProductContext.Consumer>
                </ModalFooter>

            </div>
        )
    }
}