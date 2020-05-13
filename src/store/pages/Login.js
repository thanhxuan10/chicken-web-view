import React, { Component } from 'react';
import { Input, Button, FormGroup, Label, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

class Login extends Component {
  render() {
    return (
      <div style={{ height: "80vh" }} className="d-flex flex-row justify-content-center align-item-center">
        <Col sm="10" md="6" lg="4" className="m-auto shadow-lg">
          <div className="pr-4 pl-4 pb-3">
            <h1 className="d-flex justify-content-center" >Login</h1>
            <AuthContext.Consumer>
              {({ email, password, onChange, login, isLogin }) => {
                if (isLogin) {
                  return <Redirect to="/"></Redirect>
                } else {
                  return <form>
                    <FormGroup>
                      <Label for="email">Nhập email của bạn:</Label>
                      <Input type="text" placeholder="email" id="email" name="email" value={email} onChange={onChange} ></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Nhập mật khẩu của bạn:</Label>
                      <Input type="password" placeholder="password" id="password" name="password" value={password} onChange={onChange} ></Input>
                    </FormGroup>
                    <Button className="w-100 m-1" onClick={login}>Login</Button>
                    <Button className="w-100 m-1" onClick={() => { this.props.history.push('/auth/register') }}>Signup</Button>
                  </form>
                }
              }}
            </AuthContext.Consumer>
            <br />
          </div>
        </Col>
      </div>

    )
  }
}

export default Login;