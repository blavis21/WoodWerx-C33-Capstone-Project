import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class MyProjects extends Component {
    state = {
        userId: +sessionStorage.getItem("user")
    }

    componentDidMount() {
        this.props.getUserProjects("projects", `userId=${this.state.userId}`)
    }

    render() {

        return (
            <div className="my-proj">
                {this.props.projects.map(proj =>
                    // <div key={proj.id}>
                        <Card
                            className="proj-card"
                            key={proj.id}
                            style={{ width: "18rem", marginTop: "10px" }}>
                            <Card.Img variant="top" src={proj.image} />
                            <Card.Body>
                                <Card.Title>{proj.name}</Card.Title>
                                <Card.Text>{proj.description}</Card.Text>
                            </Card.Body>
                            <Link to={`projects/${proj.id}`}>
                                <Card.Footer>Details</Card.Footer>
                            </Link>
                        </Card>
                    // </div>
                )}
            </div>
        )
    }
}
