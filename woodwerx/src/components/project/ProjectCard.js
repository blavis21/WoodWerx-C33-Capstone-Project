import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class ProjectCard extends Component {


    render() {
        return (
            <Card
                //  Lookup card shadow
                // col={3}
                className="proj-card"
                key={this.props.project.id}
                style={{ width: "18rem", margin: "20px" }}>
                <Card.Img variant="top" src={this.props.project.image} />
                <Card.Body>
                    <Card.Title>{this.props.project.name}</Card.Title>
                    <Card.Text>{this.props.project.description}</Card.Text>
                </Card.Body>
                <Link to={`projects/${this.props.project.id}`}>
                    <Card.Footer>Details</Card.Footer>
                </Link>
            </Card>
        )
    }
}
