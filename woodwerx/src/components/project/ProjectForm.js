import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
// import APIManager from '../../modules/APIManager'

export default class ProjectForm extends Component {

    state = {
        name: "",
        description: "",
        material: "",
        cutList: "",
        steps: "",
        image: "",
        modal: false
    }

    closeModal = () => this.setState({ modal: false })
    // openModal = () => console.log("this works")
    openModal = () => this.setState({ modal: true })
    
    render() {


        return (

            <div className="entireModal">
                <Button className= "createBtn" onClick={this.openModal}><i className="fa fa-plus"></i> Create New Project</Button>
                <Modal show={this.state.modal}>
                    <Modal.Header>
                        <Modal.Title>New Project</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>

                            <Form.Group controlId="">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter a name for your project" />
                            </Form.Group>

                            <Form.Group controlId="">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter a brief description" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Materials</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Cut List</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Tools (select all that apply) </Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Drill</option>
                                    <option>Hand Saw</option>
                                    <option>Miter Saw</option>
                                    <option>Table Saw</option>
                                    <option>Router</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal} variant="secondary">Close</Button>
                        <Button variant="primary">Save</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }
}
