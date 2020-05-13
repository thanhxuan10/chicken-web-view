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
import BillUpdate from './BillUpdate';


export default function BillCard(props) {
    //const { product } = props

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <ModalHeader  className="d-flex justify-content-center">Bill 1</ModalHeader>
            <ModalBody className="justify-content-center align-items-center p-4">
                <Label for="name">ID đơn hàng: Đơn 1</Label> <br />
                <Label for="name">Tên người nhận: Nhiên </Label> <br />
                <Label for="name">Sản phẩm: Thức ăn cho gà </Label> <br />
                <Label for="name"> Địa chỉ: 17/3 Hậu Giang</Label> <br />
                <Label for="name"> Số điện thoại: 012345678 </Label> <br />
                <Label for="name">  Tổng số tiền: 200.000 </Label> <br />
            </ModalBody>
            <ModalFooter>

                <div className="mt-auto ml-auto">
                    <ProductContext.Consumer>
                        {({ togglebillupdate, billProduct }) =>
                            <Button className="m-1" onClick={
                                (
                                    togglebillupdate)}>Cập nhật</Button>
                        }
                    </ProductContext.Consumer>
                    <ProductContext.Consumer>
                        {({modal2, togglebillupdate }) => <Modal isOpen={modal2}>
                            <BillUpdate exit={togglebillupdate} />
                        </Modal>}
                    </ProductContext.Consumer>
                    <Button className="m-1">Xoá</Button>
                    <Button color="primary" className="m-1" >Trạng thái</Button>
                    <Button color="secondary" onClick={toggle}>Thoát</Button>
                </div>
            </ModalFooter>

        </div>



    );
};

