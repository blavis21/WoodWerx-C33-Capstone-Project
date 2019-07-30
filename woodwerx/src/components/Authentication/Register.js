import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import APIManager from '../../modules/APIManager'



class Register extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    addUser = user => {
        return APIManager.post("users", user)
            .then((user) => sessionStorage.setItem("user", user.id))
            .then(() => APIManager.getAll("users"))
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    saveUser = e => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.addUser(user)
            .then(() => this.props.history.push("/home"))
    }



    render() {
        return (
            <Form className="login-form">
                <h1 className="text-center">Register</h1>
                <FormGroup>
                    <Label>Username</Label><br />
                    <input onChange={this.handleFieldChange} type="text" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label><br />
                    <input onChange={this.handleFieldChange} type="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label><br />
                    <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" />
                </FormGroup>
                <Button onClick={this.saveUser} type="submit" className="btn-md btn-dark btn-block">Register</Button>
            </Form>
        )
    }
}

export default withRouter(Register)
