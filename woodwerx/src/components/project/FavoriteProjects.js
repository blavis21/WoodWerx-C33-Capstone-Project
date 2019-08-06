import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class FavoriteProjects extends Component {

    // userFavorites = this.props.favoriteProjects(this.props.favorites)

    render() {
        // console.log(this.props.favorites)
        return (
            <div className="projects">
                {this.props.favorites
                .filter(fav => fav.userId === +sessionStorage.getItem("user"))
                .map(fav =>
                
                    <Card
                        className="proj-card"
                        key={fav.project.id}
                        style={{ width: "18rem", margin: "20px" }}>
                        <Card.Img variant="top" src={fav.project.image} />
                        <Card.Body>
                            <Card.Title>{fav.project.name}</Card.Title>
                            <Card.Text>{fav.project.description}</Card.Text>
                        </Card.Body>
                        <Link to={`projects/${fav.project.id}`}>
                            <Card.Footer>Details</Card.Footer>
                        </Link>
                    </Card>
                )}
            </div>
        )
    }
}
