import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { CartContext } from '../../context/CartContext'

export default class extends React.Component {
    render() {
        return (
            <CartContext.Consumer>
                {({ modal, toggle, order,onChange, phone, address, total_price }) => <Modal isOpen={modal}>
                    <ModalHeader>Thông tin đặt hàng</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="phone">Số điện thoại</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="0123xxxxxx"
                                    value={phone}
                                    onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Địa chỉ giao hàng</Label>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Số X, đường X, quận X, tp X"
                                    value={address}
                                    onChange={onChange} />
                            </FormGroup>
                        </Form>
                        <p>Số tiền cần thanh toán: <strong className="text-danger">{total_price}đ</strong></p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={order}>Đặt hàng</Button>
                        <Button color="danger" onClick={toggle}>Thoát</Button>
                    </ModalFooter>
                </Modal>}
            </CartContext.Consumer>
        )
    }
}