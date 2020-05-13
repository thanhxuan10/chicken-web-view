import React, { Component } from 'react';
import { Label, ModalHeader, ModalFooter, Button, Input, FormGroup, ModalBody} from 'reactstrap';
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
            <ProductContext.Consumer>
                {({ product, onChange, insertProduct, toggleinsert }) =>
                    <div>
                        <ModalHeader className="d-flex justify-content-center">Insert</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <Label for="name">Nhập tên sản phẩm</Label>
                            <Input type="text" placeholder="tên sản phẩm" id="name" name="name" value={product.name} onChange={onChange} ></Input>
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
                            <Label for="brand">Nhập NSX sản phẩm</Label>
                            <Input type="text" placeholder="NSX sản phẩm" id="brand" name="brand" value={product.brand} onChange={onChange} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="source">Nhập nguồn gốc sản phẩm</Label>
                            <Input type="text" placeholder="NSX sản phẩm" id="source" name="source" value={product.source} onChange={onChange} ></Input>
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

                        <ModalFooter>
                            <Button onClick={insertProduct}>Submit</Button>
                            <Button onClick={toggleinsert}>Cancel</Button>
                        </ModalFooter>
                    </div >}
            </ProductContext.Consumer>
        )
    }
}


export default InsertForm