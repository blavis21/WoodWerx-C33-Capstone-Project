import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class ToolCard extends Component {
    render() {
        return (
            <Card onClick={() => alert("Testing")}
                // key={this.props.projects.id}
                style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.tool.image} />
                <Card.Body>
                    <Card.Title>{this.props.tool.name}</Card.Title>
                    <Card.Text>{this.props.tool.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
