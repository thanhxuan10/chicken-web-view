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

//import pages from user
import HomeUser from './user/page/Home'
import CartPage from './user/page/CartPage'
import NavBar from './user/components/NavBar'

//import components
import NavFrom from './store/components/NavFrom'
import { Container } from 'reactstrap';

//import context
import ProductProvider from './context/ProductContext'
import AuthProvider from './context/AuthContext'
import { AuthContext } from './context/AuthContext'

class App extends Component {

  render() {
    return (
      <Router>
      <AuthProvider>
        <Container>
            <AuthContext>
              {({ isLogin, permission }) => {
                if (!isLogin) {
                  return <Redirect to="/auth/login"/>
                } else {
                  console.log(isLogin)
                  if (permission == 1) {
                    return <ProductProvider>
                      <div>
                        <NavFrom />
                      </div>
                      <Route path="/" exact component={Home} />
                      <Route path="/bill" component={Bill} />
                      <Route path="/product/insert" component={Insert} />
                    </ProductProvider>
                  } else if (permission == 0) {
                    return <ProductProvider>
                      <div>
                        <NavBar />
                      </div>
                      <Route path="/" exact component={HomeUser} />
                      <Route path="/cart" exact component={CartPage} />
                    </ProductProvider>
                  } else {
                    return <p>professionals</p>
                  }
                }
              }}
            </AuthContext>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={SignUp} />
          
        </Container>
      </AuthProvider>
      </Router>
    )
  }
}

export default App;
