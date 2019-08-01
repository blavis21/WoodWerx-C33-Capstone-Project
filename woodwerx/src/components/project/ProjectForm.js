import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import APIManager from '../../modules/APIManager'

export default class ProjectForm extends Component {

    state = {
        userId: +sessionStorage.getItem("user"),
        name: "",
        description: "",
        material: "",
        cutList: "",
        instructions: "",
        image: "",
        modal: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    handleClick = event => {
        event.preventDefault()
        const project = {
            userId: this.state.userId,
            name: this.state.name,
            description: this.state.description,
            material: this.state.material,
            cutList: this.state.cutList,
            instructions: this.state.instructions,
            image: this.state.image
        }
        console.log("form data", project)
        this.props.addProject(project)
    }

    closeModal = () => this.setState({ modal: false })
    // openModal = () => console.log("this works")
    openModal = () => this.setState({ modal: true })


    render() {
        return (

            <div className="entireModal">
                <Button className="createBtn" onClick={this.openModal}><i className="fa fa-plus"></i> Create New Project</Button>
                <Modal show={this.state.modal}>
                    <Modal.Header>
                        <Modal.Title>New Project</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>

                            <Form.Group controlId="name">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} type="text" placeholder="Enter a name for your project" />
                            </Form.Group>

                            <Form.Group controlId="image">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" onChange={this.handleFieldChange}/>
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} type="text" placeholder="Enter a brief description" />
                            </Form.Group>

                            <Form.Group controlId="material">
                                <Form.Label>Materials</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="cutList">
                                <Form.Label>Cut List</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="tools">
                                <Form.Label>Tools (select all that apply) </Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Drill</option>
                                    <option>Hand Saw</option>
                                    <option>Miter Saw</option>
                                    <option>Table Saw</option>
                                    <option>Router</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="instructions">
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} as="textarea" rows="3" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal} variant="secondary">Close</Button>
                        <Button onClick={this.handleClick} variant="primary">Save</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }
}
