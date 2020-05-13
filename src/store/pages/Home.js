import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../../context/ProductContext'

import UpdateForm from '../components/UpdateFrom'
import { Modal, Button } from 'reactstrap';
import InsertForm from '../components/InsertForm'

class Home extends Component {
  constructor(props) {
    super(props)
    const isLogin = localStorage.getItem("isLogin")

    let loggedIn = true
    if (isLogin == null) {
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/auth/login" />
    }
    else {
      return (
        <div>
      <h1 className="d-flex justify-content-center">Products Management</h1>    
            <ProductContext.Consumer>
            {({ toggleinsert }) => <Button  size="lg" block onClick = {toggleinsert}>Insert</Button>}
          </ProductContext.Consumer>
          <ProductContext.Consumer>
            {({ modal1, toggleinsert }) => <Modal isOpen={modal1}>
              <InsertForm exit={toggleinsert} />
            </Modal>}
          </ProductContext.Consumer>

          <ProductContext.Consumer>
            {({ product, modal, toggle }) => <Modal isOpen={modal}>
              <UpdateForm product={product} exit={toggle} />
            </Modal>}
          </ProductContext.Consumer>
          <ProductContext.Consumer>
            {({ products, getProduct }) => {
              if (products.length) {
                return products.map((product, index) => <ProductCard
                  key={index}
                  product={product} />)
              } else {
                return <p>Không có sản phẩm nào</p>
              }
            }}
          </ProductContext.Consumer>
        </div>
      )
    }
  }
}

export default Home;