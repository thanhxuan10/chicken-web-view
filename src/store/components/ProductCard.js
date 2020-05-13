import React from 'react';
import {
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

export default function ProductCard(props) {
    const { product } = props
    return (
        <Col lg="12" className="m-2">
            <Card className="d-flex flex-row">
                <div className="d-flex flex-row justify-content-center align-items-center p-4">
                    <CardImg
                        top
                        width="100%"
                        src={`/images?image=${product.images}`}
                        alt="Card image cap"
                    />
                </div>
                <CardBody className="d-flex flex-column align-items-start">
                    <CardTitle>Tên sản phẩm: {product.name}</CardTitle>
                    <CardSubtitle className="text-danger">Số lượng: {product.quantity}</CardSubtitle>
                    <CardText className="text-left">Nội dung sản phẩm: {product.description}</CardText>
                    <CardText className="text-left">Giá sản phẩm: {product.price}</CardText>
                    <ProductContext.Consumer>
                        {({ deleteProduct, getProduct }) => (
                            <div className="mt-auto ml-auto">
                                <Button className="m-1" onClick={() => getProduct(product.id)}>Cập nhật</Button>
                                <Button className="m-1" onClick={() => deleteProduct(product.id)}>Xoá</Button>
                            </div>
                        )}
                    </ProductContext.Consumer>

                </CardBody>
            </Card>
        </Col>
    );
};

