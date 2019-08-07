import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { withRouter } from 'react-router'
import API from '../../modules/APIManager'
// import APIManager from '../../modules/APIManager'

class EditProject extends Component {

    state = {
        userId: +sessionStorage.getItem("user"),
        name: "",
        description: "",
        material: "",
        cutList: "",
        tools: "",
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

    editProj = event => {
        event.preventDefault()
        const project = {
            id: this.props.match.params.projectId,
            userId: +sessionStorage.getItem("user"),
            name: this.state.name,
            description: this.state.description,
            material: this.state.material,
            cutList: this.state.cutList,
            tools: this.state.tools,
            instructions: this.state.instructions,
            image: this.state.image
        }
        console.log("form data", project)
        this.props.editProject(project)
            .then(() => this.props.history.push("/home"))
            this.closeModal()
    }

    componentDidMount() {
        API.get("projects", this.props.match.params.projectId)
            .then(proj => {
                this.setState({
                    userId: +sessionStorage.getItem("user"),
                    name: this.state.name,
                    description: this.state.description,
                    material: this.state.material,
                    cutList: this.state.cutList,
                    tools: this.state.tools,
                    instructions: this.state.instructions,
                    image: this.state.image,
                    modal: false
                })
            })
    }

    closeModal = () => this.setState({ modal: false })
    // openModal = () => console.log("this works")
    openModal = () => this.setState({ modal: true })


    render() {
        return (

            <div className="entire-modal">
                <Button className="createBtn" onClick={this.openModal}> Edit Project</Button>
                <Modal show={this.state.modal}>
                    <Modal.Header>
                        <Modal.Title>Edit Project</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>

                            <Form.Group controlId="name">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} type="text" placeholder="Enter a name for your project" />
                            </Form.Group>

                            <Form.Group controlId="image">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" onChange={this.handleFieldChange} />
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
                                <Form.Label>Tools</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="instructions">
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control onChange={this.handleFieldChange} as="textarea" rows="3" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal} variant="secondary">Close</Button>
                        <Button onClick={this.editProj} variant="primary">Save</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }
}


export default withRouter(EditProject)