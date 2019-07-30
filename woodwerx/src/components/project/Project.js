import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import './project.css'

export default class Project extends Component {
    render() {
        
        return (
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
        )
    }
}