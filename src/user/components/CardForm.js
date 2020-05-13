import React from 'react';
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
import Choosebuy from '../components/Choosebuy';

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: [],
        }
    }
    componentDidMount() {
        fetch(`/user/product/getProducts`).then(res => res.json()).then(json => {
            this.setState({
                product: json
            })
        })
    }
    render() {
        var { product } = this.state
        return (
            <div>
                <Row >

                    {product.map(product => (
                        <Col lg="3" className="p-1">
                            <Card>
                                <CardImg top width="100%" src={`/images?image=${product.images}`} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Tên sản phẩm: {product.name}</CardTitle>
                                    <CardSubtitle className="text-danger">Số lượng: {product.quantity}</CardSubtitle>
                                    <CardText className="text-left">Nội dung sản phẩm: {product.description}</CardText>
                                    <CardText className="text-left">Giá sản phẩm: {product.price}</CardText>
                                </CardBody>
                                <ProductContext.Consumer>
                                    {({ togglecart }) => <Button size="lg" block onClick={togglecart}>Mua hàng</Button>}
                                    </ProductContext.Consumer>
                                    <ProductContext.Consumer>
                                    {({ modal3, togglecart }) => <Modal isOpen={modal3}>
                                        <Choosebuy exit={togglecart} />
                                    </Modal>}
                                    </ProductContext.Consumer>
                            </Card>
                        </Col>
                    ))};

                        </Row>
            </div>


        );
    }
};

