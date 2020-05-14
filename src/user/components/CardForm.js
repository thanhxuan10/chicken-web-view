import React from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";
import { CartContext } from '../../context/CartContext'
import '../../CSS/CardForm.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch(`/user/product/getProducts`).then(res => res.json()).then(json => {
            this.setState({
                products: json
            })
        })
    }

    render() {
        var { products } = this.state
        return (
            <div>
                <Row>
                    {products.map(product => (
                        <Col lg="3" className="p-1">
                            <CartContext.Consumer>
                                {({ chooseProduct }) => <Link to="/product" className="card-tx-link">
                                    <Card className="border-0 p-4 card-hover" onClick={() => chooseProduct(product)}>
                                        <CardImg top width="100%" src={`/images?image=${product.images}`} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>Tên sản phẩm: {product.name}</CardTitle>
                                            <CardText className="text-left">Giá sản phẩm: {product.price}</CardText>
                                        </CardBody>
                                    </Card>
                                </Link>}
                            </CartContext.Consumer>
                        </Col>
                    ))};
                        </Row>
            </div>
        );
    }
};

