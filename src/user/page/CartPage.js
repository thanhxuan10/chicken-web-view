import React, { Component, useState } from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader
} from "reactstrap";
import { CartContext } from '../../context/CartContext'
import CartItem from '../components/CartItem'
import OrderForm from '../components/OrderForm'

export default class extends React.Component {
  render() {
    return (
      <Col lg="12">
        <Col lg="12" className="m-1 bg-white">
          <CartContext.Consumer>
            {({ count }) => <p className="p-2">Giỏ hàng của bạn ({count} sản phẩm)</p>}
          </CartContext.Consumer>
        </Col>
        <Row className="m-1 p-0">
          <Col lg="10" className="border-right">
            <CartContext.Consumer>
              {({ products }) => (products.length > 0) ? products.map((Item) => <CartItem Item={Item} />) : <p>Không có sản phẩm nào trong giỏ hàng!</p>}
            </CartContext.Consumer>
          </Col>
          <CartContext.Consumer>
            {({ total_price, toggle }) => <Col lg="2" className="p-2 bg-white">
              <p className="border-bottom">CHI TIẾT GIÁ</p>
              <Col className="mt-auto">
                <p>Tổng tiền: <strong className="text-danger mt-auto">{total_price}đ</strong></p>
                <Button color="danger" className="w-100" onClick={toggle}>Đặt mua</Button>
              </Col>
            </Col>}
          </CartContext.Consumer>
        </Row>
        <OrderForm />
      </Col>
    )
  }
}

