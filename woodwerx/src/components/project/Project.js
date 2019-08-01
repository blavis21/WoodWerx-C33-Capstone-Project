import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'
import './project.css'

export default class Project extends Component {


    render() {
        return (
            <div>
                <div className="project-form">
                    <ProjectForm {...this.props}/>
                </div>
                <div>
                    <section className="projects">
                        {this.props.projects
                            .map(project => (
                                <div key={project.id} className="project-card">
                                    <ProjectCard project={project} {...this.props} />
                                </div>
                            ))}
                    </section>
                </div>
            </div>
        )
    }
}