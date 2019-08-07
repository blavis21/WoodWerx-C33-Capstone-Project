import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import EditProject from './EditProject'
// import EditableLabel from 'react-inline-editing'
export default class DetailedProject extends Component {


    render() {
        return (
            <div >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <EditProject {...this.props} />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button>Add to Favorites</Button>
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
}
