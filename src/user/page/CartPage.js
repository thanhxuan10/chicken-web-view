import React, { Component, useState } from 'react';
import {
  Modal,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle
} from "reactstrap";
import { ProductContext } from '../../context/ProductContext'
import Cart from '../components/Cart'

export default class extends React.Component {
  constructor(props) {
        super(props)

       this.state = {
           product: [],
           modal: true,
       }
   
   }
  
   render() {
    
    return (
      <div>
        <h1 className="d-flex justify-content-center">Giỏ hàng</h1>
          <Col lg="12" className="m-2" >
            <Card className="d-flex flex-row" style={{ height: "30vh" }}>
                <div className="d-flex flex-row justify-content-center align-items-center p-4">
                    <CardImg
                        top
                        width="100%"
                        src={`/n.jpg`}
                        alt="Card image cap"
                    />
                </div>
                <CardBody className="d-flex flex-column align-items-start">
                    <CardTitle>Tên sản phẩm: P1</CardTitle>
                    <CardSubtitle className="text-left">Số lượng: 1</CardSubtitle>
                    <CardText className="text-left">Nội dung sản phẩm: Demo P1</CardText>
                    <CardText className="text-left">Giá sản phẩm: 100.000</CardText>
                    <Button color="danger">Xoá</Button>
                </CardBody>
            </Card>
            <h2 className="text-danger">Tổng tiền tạm tính: 100.000</h2>
            <ProductContext.Consumer>
                        {({ toggle2 }) => <Button size="lg" block onClick={toggle2}>Thanh toán</Button>}
                    </ProductContext.Consumer>
                    <ProductContext.Consumer>
                        {({ modal4, toggle2 }) => <Modal isOpen={modal4}>
                            <Cart exit={toggle2} />
                        </Modal>}
                    </ProductContext.Consumer>
            <Button className="w-100 m-1">Tiếp tục mua sắm</Button>
        </Col>
      </div>

    )
  }
}

