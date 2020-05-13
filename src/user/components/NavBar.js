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
    Button,
} from 'reactstrap';
import { AuthContext } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'
import CartPage from '../page/CartPage'

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
                    <NavbarBrand>User Management</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>

                        </Nav>

                        <Nav>
                            <NavLink href="/cart">
                                <img
                                    src="/commerce.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top-right"
                                    alt="React Bootstrap logo"
                                    href="/cart"
                                />
                            </NavLink>

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