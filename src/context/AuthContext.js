import React from 'react'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext()

export default class AuthProvider extends React.Component {
    constructor(props) {
        super(props)
        
        if(localStorage.getItem("isLogin") == null) {
            localStorage.setItem("isLogin", false)
        }

        if(localStorage.getItem("permission") == null) {
            localStorage.setItem("permission", 0)
        }

        this.state = {
            isLogin: localStorage.getItem("isLogin"),
            permission: localStorage.getItem("permission"),
            email: null,
            password: null
        }

        this.onChange = this.onChange.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async login() {
        const {email, password} = this.state
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password })
        };
    
        await fetch('/user/auth/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.setState({
                isLogin:true,
                permission: data.permission
            })
            localStorage.setItem("isLogin", true)
            localStorage.setItem("permission", data.permission)
            localStorage.setItem("id",  JSON.stringify(data.id))

          }).catch(e => {
            alert(e.data)
          });
      }

    logout() {
        localStorage.setItem("isLogin", false)
        localStorage.setItem("permission", 0)
        this.setState({
            isLogin: false
        })
    }

    render() {
        const { username, password, isLogin, permission } = this.state
        return <AuthContext.Provider value={{
            isLogin: isLogin,
            username: username,
            password: password,
            permission: permission,
            onChange: this.onChange,
            login: this.login,
            logout: this.logout
        }}>
            {this.props.children}
        </AuthContext.Provider>
    }
}