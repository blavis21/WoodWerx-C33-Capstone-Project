import React, { Component } from 'react'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'
import APIManager from '../../modules/APIManager'
import './auth.css'

class Login extends Component {

    state = {
        username: "",
        password: "",
        id: ""
    }

    handFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    handleLogin = e => {
        e.preventDefault()

        if (this.state.username === "" || this.state.password === "") {
            window.alert("Please fill out the missing section")
        } 
        

        APIManager.getAll("user")
            .then(user => {
                const singleUser = user.find(el =>
                    el.email.toLowerCase() === this.state.email.toLowerCase() && el.password.toLowerCase() === this.state.password.toLowerCase()
                )
                if (singleUser) {
                    sessionStorage.setItem("user", singleUser.id)
                }
                this.props.setAuthState()
                this.props.history.push('/home')
            })
    }
    render() {
        return (
            <Form className="login-form">
                <h1 className="text-center">Login</h1>
                <FormGroup>
                    <Label>Email</Label><br />
                    <input onChange={this.handFieldChange} type="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label><br />
                    <input onChange={this.handFieldChange} type="password" id="password" placeholder="Password" />
                </FormGroup>
                <Button onClick={this.handleLogin} type="submit" className="btn-md btn-dark btn-block">Login</Button>
                <Link to="/register">
                    <Button type="submit" className="btn-md btn-light btn-block">Register</Button>
                </Link>
            </Form>
        )
    }
}

export default withRouter(Login)