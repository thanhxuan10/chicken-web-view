import React, { Component } from 'react';
import { Input, Button, Container, FormGroup, Label, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'
class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      address: '',
      phonenumber: '',
      code: '',
      lx: 0,
      ly: 0,
      //isSignup: false
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  signup(username, email, phonenumber, address, password, confirm_password, lx, ly, code) {
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, email: email, phonenumber: phonenumber, address: address,  password: password, confirm_password: confirm_password ,lx: lx, ly: ly, code: code}),

    };

    
    fetch('/user/auth/register', requestOptions)
      .then(response => response.json())
      .then(data => {
        // this.setState({loggedIn: true})
        // localStorage.setItem("isSignup", true)
        //console.log(localStorage.getItem("isSignup"))
        console.log(data)
      } ).catch(e => {
        alert(e.data.console.error)
      });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async submitForm(e) {
    //e.preventDefault()
    const { username, password, confirm_password, email, address, phonenumber, lx, ly, code } = this.state
    await this.signup(username, email, phonenumber, address, password, confirm_password, lx, ly, code)
    await console.log(this.state)
    await this.props.history.push('/auth/login')
  }

  render() {
    // if (this.state.isSignup) {
    //   return <Redirect to="/auth/login" />
    // }

    return (
      <Container>
        <div>
        <div style={{height: "80vh"}} className="d-flex flex-row justify-content-center align-item-center">
        <Col sm="10" md="6" lg="4" className="m-auto shadow-lg">
          <h1 className="d-flex justify-content-center" >Sign Up</h1>
          <form onSubmit={this.submitForm}>
            <FormGroup>
            <Label for="username">Enter your username</Label>
              <Input type="text" placeholder="username" id="username" name ="username"value={this.state.username} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="password">Enter your password</Label>
            <Input type="password" placeholder="password" id="password" name="password" value={this.state.password} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="confirm_password">Enter your password again</Label>
            <Input type="password" placeholder="enter password again" id="confirm_password" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="email">Enter your email</Label>
            <Input type="text" placeholder="email" id="email" name="email" value={this.state.email} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="address">Enter your address</Label>
            <Input type="text" placeholder="address" id="address" name="address" value={this.state.address} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="phonenumber">Enter your phone</Label>
            <Input type="text" placeholder="phonenumber" id="phonenumber" name="phonenumber" value={this.state.phonenumber} onChange={this.onChange} ></Input>
            </FormGroup>
            <FormGroup>
            <Label for="code">Nhập CMND:</Label>
            <Input type="text" placeholder="code" id="code" name="code" value={this.state.code} onChange={this.onChange} ></Input>
          </FormGroup>
            <FormGroup>
            <Button
            onClick ={(e) =>
            navigator.geolocation.getCurrentPosition(
              (position) => {
                  this.setState({
                      ly: position.coords.latitude,
                      lx: position.coords.longitude,
                      error: null,
                  })
                  console.log("lx:", position.coords.latitude)
                  this.submitForm(e)
                  
          })
          } 
            >Submit</Button>

            </FormGroup>
          </form>
          </Col>
          </div>
        </div>
      </Container>
    )
  }
}


export default SignUp