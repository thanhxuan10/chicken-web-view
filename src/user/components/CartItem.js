import React from 'react';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
} from 'reactstrap';

import { CartContext } from '../../context/CartContext';

export default function ProductCart(props) {
  const { Item } = props;
  return(
        <Card className="d-flex flex-row m-1 p-0 bg-white">
            <div className="d-flex flex-row justify-content-center align-items-center p-4">
                <CardImg top width="100%" src={`/images?image=${Item.images}`} alt="Card image cap"/>
            </div>
            <CardBody className="d-flex flex-column align-items-start">
                <CardTitle>
                    Tên sản phẩm: { Item.name }
                </CardTitle>
                <CardSubtitle className="text-danger" >
                    Số lượng: {Item.quantity}
                </CardSubtitle>
                <CartContext.Consumer>
                    {({ removeFromCart }) => <Button onClick = {() => removeFromCart(Item)} className="mt-auto ml-auto">
                            Xóa
                        </Button>}
                </CartContext.Consumer>
            </CardBody>
        </Card>
  );
}
