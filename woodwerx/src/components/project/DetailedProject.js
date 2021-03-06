import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import EditProject from './EditProject'
// import EditableLabel from 'react-inline-editing'
export default class DetailedProject extends Component {


    state = {
        userId: +sessionStorage.getItem("user"),
        projectId: ""
    }

    addFavorite = e => {
        e.preventDefault()
        const favorite = {
            userId: this.state.userId,
            projectId: this.props.proj.id
        }
        console.log(favorite)
        this.props.addFavoriteProject(favorite)
    }


    isUser = props => {
        return (
            <div >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <EditProject {...this.props} />
                </div>
                <div style={{ textAlign: 'center' }}>

                    <Col md={12}>
                        <Image src={this.props.proj.image} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', width: '50%' }} rounded />
                    </Col>
                    {/* <EditableLabel text={this.props.proj.name} onFocusOut={this._handleFocusOut}> */}
                    <h2 style={{ padding: '5px' }}>{this.props.proj.name}</h2>
                    {/* </EditableLabel> */}
                </div>
                <div className="proj-details">
                    <h4>Materials</h4>
                    <p>{this.props.proj.material}</p>
                    <h4>Cut List</h4>
                    <p>{this.props.proj.cutList}</p>
                    <h4>Instructions</h4>
                    <p>{this.props.proj.instructions}</p>
                </div>
            </div>
        )
    }

    isNotUser = props => {
        return (
            <div id={this.props.proj.id}>
                <div style={{ display: "flex", justifyContent: "center", margin: "15px"}}>
                    <Button onClick={this.addFavorite}>Add to Favorites</Button>
                </div>
                <div style={{ textAlign: 'center' }}>

                    <Col md={12}>
                        <Image src={this.props.proj.image} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', width: '50%' }} rounded />
                    </Col>
                    <h2 style={{ padding: '5px' }}>{this.props.proj.name}</h2>
                </div>
                <div className="proj-details">
                    <h4>Materials</h4>
                    <p>{this.props.proj.material}</p>
                    <h4>Cut List</h4>
                    <p>{this.props.proj.cutList}</p>
                    <h4>Instructions</h4>
                    <p>{this.props.proj.instructions}</p>
                </div>
            </div>
        )
    }

    checkUser = props => {
        let id = props.id
        let currentUser = +sessionStorage.getItem("user")
        if (currentUser === id) {
            return <this.isUser />
        } else {
            return <this.isNotUser />
        }
    }


    render() {
        return (
            <this.checkUser id={this.props.proj.userId}></this.checkUser>

        )
    }
}
