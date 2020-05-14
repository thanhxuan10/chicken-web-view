import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { CartContext } from '../../context/CartContext'
import '../../CSS/Product.css'

export default class extends React.Component {
    render() {
        return <CartContext.Consumer>
            {({ product, increase, decrease, addToCart, onChange }) => {
                if (product) {
                    return <Row className="m-2 bg-white">
                        <Col lg="4" className="border-right">
                            <img
                                src={`/images?image=${product.images}`}
                                alt="Card image cap"
                                className="w-100" />
                        </Col>
                        <Col lg="8">
                            <div className="d-flex flex-column justify-content-center align-items-start border-bottom p-2">
                                <h4>{product.name}</h4>
                                <p>Thương hiệu: {product.brand}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-start border-bottom p-4">
                                <h4 className="text-danger">{product.price}</h4>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-start border-bottom p-4">
                                <p>{product.description}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-start align-items-center border-bottom">
                                <div className="d-flex flex-row justify-content-center align-items-center m-4 group-input">
                                    <button onClick={decrease}>-</button>
                                    <input name = "quantity" value={product.quantity} onChange={onChange}/>
                                    <button onClick={increase}>+</button>
                                </div>
                                <Button color="danger" className="m-4" onClick={addToCart}>Chọn mua</Button>
                            </div>
                        </Col>
                    </Row>
                }
            }}
        </CartContext.Consumer>
    }
}