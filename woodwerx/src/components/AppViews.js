import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import API from '../modules/APIManager'
import Project from './project/Project'
import Tool from './tool/Tool'
import ProjectForm from './project/ProjectForm'
import DetailedProject from './project/DetailedProject'
import MyProjects from './project/MyProjects'
import EditProject from './project/EditProject'
import FavoriteProjects from './project/FavoriteProjects';

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
        API.getAll("favoriteProjects?_expand=user&_expand=project")
            .then(fav => newState.favorites = fav)
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

    getUserProjects = (resource, query) => {
        API.getAll(resource, query)
            .then(proj => this.setState({
                projects: proj
            }))
    }

    deleteProject = id => {
        return API.delete("projects", id)
            .then(() => API.getAll("projects"))
            .then(project => {
                this.setState({ projects: project })
            })
    }

    editProject = id => {
        return API.put("projects", id)
            .then(() => API.getAll("projects"))
            .then(project => {
                this.setState({
                    projects: project
                })
            })
    }

    // favoriteProjects(projects) {
    //     console.log(projects)
    //     return projects.filter(project => project.userId === +sessionStorage.getItem("user")
    //     );
    // }


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
                    let proj = this.state.projects.find(project => project.id === parseInt(props.match.params.projectId))

                    if (this.isAuthenticated()) {
                        // console.log(this.state.tools)
                        return <DetailedProject proj={proj}
                            editProject={this.editProject} />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

                <Route exact path="/myprojects" render={props => {
                    // let myProj = this.state.projects.filter( proj => proj.userId === +sessionStorage.getItem("user"))

                    if (this.isAuthenticated()) {
                        return <MyProjects
                            // myProj={myProj}
                            getUserProjects={this.getUserProjects}
                            projects={this.state.projects}
                            deleteProject={this.deleteProject}
                        />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />

                <Route
                    path="/projects/:projectId(\d+)/edit"
                    render={props => {
                        if (this.isAuthenticated()) {
                            return <EditProject
                                {...props}
                                editProject={this.editProject}
                                projects={this.state.projects}
                            />
                        } else {
                            return <Redirect to="/" />
                        }
                    }}
                />

                <Route
                    path="/favorites"
                    render={props => {
                        if (this.isAuthenticated()) {
                            return <FavoriteProjects
                                {...props}
                                favorites={this.state.favorites}
                                // favoriteProjects={this.favoriteProjects}
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
