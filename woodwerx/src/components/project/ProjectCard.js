import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class ProjectCard extends Component {

    render() {
        return (
                <Card onClick={() => alert("Testing")} 
                    // key={this.props.projects.id}
                    style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={this.props.project.image} />
                    <Card.Body>
                        <Card.Title>{this.props.project.name}</Card.Title>
                        <Card.Text>{this.props.project.description}</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}
