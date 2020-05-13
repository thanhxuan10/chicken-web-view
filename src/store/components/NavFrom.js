import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { AuthContext } from '../../context/AuthContext'

class NavFrom extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      isLogin: localStorage.getItem("isLogin")
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {


    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Store Management</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bill">Bills</NavLink>
              </NavItem>
            </Nav>

            <Nav>
              <AuthContext.Consumer>
                {({ logout }) => <NavLink onClick={logout} >sign out</NavLink>}
              </AuthContext.Consumer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavFrom;