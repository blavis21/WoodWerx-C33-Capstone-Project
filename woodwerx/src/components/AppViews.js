import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import API from '../modules/APIManager'
import Project from './project/Project'
import Home from './Home'

export default class AppViews extends Component {
    state = {
        users: [],
        projects: [],
        favorites: []
    }


    componentDidMount() {
        const newState = {}

        API.getAll("user")
            .then(user => (newState.users = user))
    }

    isAuthenticated = () => sessionStorage.getItem("user") !== null


    render() {
        return (
            <React.Fragment>

                <Route exact path="/" render={props => {
                    return <Login />
                }}
                />

                <Route path="/register" render={props => {
                    return <Register />
                }}
                />

                <Route path="/project" render={props => {
                    return <Project />
                }}
                />

                <Route path="/home" render={props => {
                    if (this.isAuthenticated()) {
                        return (
                            <Home />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
            </React.Fragment>
        )
    }
}
