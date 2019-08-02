import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import API from '../modules/APIManager'
import Project from './project/Project'
import Tool from './tool/Tool'
import ProjectForm from './project/ProjectForm'
import DetailedProject from './project/DetailedProject';

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
        API.getAll("tools")
            .then(tool => newState.tools = tool)
            .then(() => this.setState(newState))
    }

    isAuthenticated = () => sessionStorage.getItem("user") !== null

    addProject = proj => {
        API.post("projects", proj)
            .then(() => API.getAll("projects"))
            .then(project => this.setState({
                projects: project
            })
            )
    }


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

                <Route path="/home" render={props => {
                    if (this.isAuthenticated()) {
                        console.log(this.state.projects)
                        return <Project {...props}
                            projects={this.state.projects}
                            addProject={this.addProject}
                        />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

                <Route path="/tools" render={props => {
                    if (this.isAuthenticated()) {
                        console.log(this.state.tools)
                        return <Tool {...props}
                            tools={this.state.tools}
                        />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

                <Route path="/projectform" render={props => {
                    if (this.isAuthenticated()) {
                        // console.log(this.state.tools)
                        return <ProjectForm />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

                <Route exact path="/projects/:projectId(\d+)" render={props => {
                    let proj = this.state.projects.find(project => project.id ===parseInt(props.match.params.projectId))

                    if (this.isAuthenticated()) {
                        // console.log(this.state.tools)
                        return <DetailedProject proj={proj}/>
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

            </React.Fragment>
        )
    }
}
