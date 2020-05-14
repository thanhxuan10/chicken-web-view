//import libraries
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

//import pages from store
import Home from './store/pages/Home'
import Bill from './store/pages/Bill'
import Login from './store/pages/Login'
import SignUp from './store/pages/SignUp'
import Insert from './store/pages/Insert'
import BillCard from './store/pages/BillCard'

//import pages from user
import HomeUser from './user/page/Home'
import CartPage from './user/page/CartPage'
import NavBar from './user/components/NavBar'
import Product from './user/page/Product'

//import components
import NavFrom from './store/components/NavFrom'
import { Container } from 'reactstrap';

//import context
import ProductProvider from './context/ProductContext'
import BillProvider from './context/BillContext'
import CartProvider, { CartContext } from './context/CartContext'

import AuthProvider from './context/AuthContext'
import { AuthContext } from './context/AuthContext'
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        
        <AuthProvider>
          <AuthContext>
            {({ isLogin, permission }) => {
              if (!isLogin) {
                return <Redirect to="/auth/login" />
              } else {
                console.log(isLogin)
                if (permission == 1) {
                  return <ProductProvider>
                    <BillProvider>
                    <NavFrom />
                    <Container className="bg-white">
                      <Route path="/" exact component={Home} />
                      <Route path="/bill" component={Bill} />
                      <Route path="/billcard" component={BillCard} />
                      <Route path="/product/insert" component={Insert} />         
                    </Container>
                  </BillProvider>
                  </ProductProvider>
                } else if (permission == 0) {
                  return <ProductProvider>
                    <CartProvider>
                      <NavBar />
                      <Container>
                        <Route path="/" exact component={HomeUser} />
                        <Route path="/product" component={Product} />
                        <Route path="/cart" exact component={CartPage} />
                      </Container>
                    </CartProvider>
                  </ProductProvider>
                } else {
                  return <p>professionals</p>
                }
              }
            }}
          </AuthContext>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={SignUp} />
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
