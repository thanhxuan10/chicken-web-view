import React, { useState } from 'react';
import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Col,
  Table,
  Row

} from "reactstrap";
import { BillContext } from '../../context/BillContext'



//import BillUpdate from './BillUpdate';


export default class BillCard extends React.Component {
  constructor(props) {
    super(props)


  }



  render() {

    return (

      <div>
        <div style={{ height: "80vh" }} className="d-flex flex-row justify-content-bottom align-item-bottom">
          <Col sm="10" lg="12" className="m-auto ">
            <BillContext.Consumer>
              {({ item }) => {


                if (!item) {
                  return (
                    <p>Không có sản phẩm</p>
                  )
                }
                else {
                  return (
                    <div>
                      <h4>Đơn hàng đã đặt</h4><hr />
                      <Row>

                        <div>
                          Mã đơn hàng: {item.id}<br />
                    Ngày đặt hàng: {item.date}<hr />
                        </div>
                        <Col >
                          <div style={{ width: "30px", height: "30px" }} className="d-flex justify-content-center align-items-center bg-danger p-2 rounded-circle" >
                            <img src="cho.png" className="w-100" />
                          </div>

                         Chờ xác nhận
                       </Col>
                        <img src="signs.png" width="30px" height="30px" alt="Logo" />
                        <Col>
                          <div style={{ width: "30px", height: "30px" }} className="d-flex justify-content-center align-items-center bg-danger p-2 rounded-circle" >
                            <img src="xacnhan.png" className="w-100" />
                          </div>
                       Đã xác nhận
                       </Col>
                        <img src="signs.png" width="30px" height="30px" alt="Logo" />
                        <Col>
                          <div style={{ width: "30px", height: "30px" }} className="d-flex justify-content-center align-items-center bg-danger p-2 rounded-circle" >
                            <img src="giao.png" className="w-100" />
                          </div>
                        Đang giao hàng
                      </Col>
                        <img src="signs.png" width="30px" height="30px" alt="Logo" />
                        <Col>
                          <div style={{ width: "30px", height: "30px" }} className="d-flex justify-content-center align-items-center bg-danger p-2 rounded-circle" >
                            <img src="xong.png" className="w-100" />
                          </div>
                          Đã giao hàng
                        </Col>

                      </Row>
                      <div>
                        <ListGroup>
                          <ListGroupItem >
                            <ListGroupItemHeading>Thông tin đặt hàng</ListGroupItemHeading><hr />
                            <ListGroupItemText>
                              Tên người nhận: {item.username} - {item.phonenumber}<br />
                        Địa chỉ: {item.address}

                            </ListGroupItemText>
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </div>
                  )
                }
              }}

            </BillContext.Consumer>


            <div >
              <Table  >
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <BillContext.Consumer>
                    {({ item }) => {
                      if (!item) {
                        return (
                          <p>Không có sản phẩm</p>
                        )
                      }
                      else {
                        return (item.products.map(x =>
                          <tr>
                            <th scope="row">{x.name}</th>
                            <td>{x.price}</td>
                            <td>{x.quantity}</td>
                            <td>{x.price * parseInt(x.quantity)}</td>
                          </tr>
                        )
                        )
                      }
                    }}
                  </BillContext.Consumer>
                </tbody>
                <BillContext.Consumer>
                  {({ item }) => {
                    if (!item) {
                      return (
                        <p>Không có sản phẩm</p>
                      )
                    }
                    else {
                      return (
                        <tr>
                          <th scope="row">Tổng thanh toán</th>
                          <td></td>
                          <td></td>
                          <td>{item.total_price}</td>
                        </tr>
                      )
                    }
                  }}

                </BillContext.Consumer>
              </Table>

            </div>
          </Col>
        </div>
      </div>
    )
  }
}



