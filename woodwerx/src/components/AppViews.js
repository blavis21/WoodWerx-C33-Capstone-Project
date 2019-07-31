import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SignInForm from './Authentication/Login'
import SignUpForm from './Authentication/Register'
import API from '../modules/APIManager'
import Project from './project/Project'

export default class AppViews extends Component {
    state = {
        users: [],
        projects: [],
        favorites: [],
        tools: []
    }


    componentDidMount() {
        const newState = {}

        API.getAll("users")
            .then(user => (newState.users = user))
        API.getAll("projects")
            .then(project => (newState.projects = project))
            .then(() => this.setState(newState))
    }

    isAuthenticated = () => sessionStorage.getItem("user") !== null


    render() {
        return (
            <React.Fragment>

                <Route exact path="/" render={props => {
                    return <SignInForm />
                }}
                />
                

                <Route path="/register" render={props => {
                    return <SignUpForm />
                }}
                />

                <Route path="/home" render={props => {
                    if(this.isAuthenticated()) {
                        console.log(this.state.projects)
                        return <Project {...props} 
                        projects={this.state.projects}
                         />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

            </React.Fragment>
        )
    }
}
