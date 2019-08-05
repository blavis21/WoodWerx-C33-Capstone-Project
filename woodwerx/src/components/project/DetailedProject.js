import React, { Component } from 'react'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'

export default class DetailedProject extends Component {
    render() {
        return (
            <div >
                <Container>
                    <Row>
                        <div style={{ textAlign: 'center' }}>

                            <Col md={12}>
                                <Image src={this.props.proj.image} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', width: '70%' }} rounded />
                            </Col>
                            <h2 style={{padding: '5px'}}>{this.props.proj.name}</h2>
                        </div>
                        <div className="proj-details">
                            <h4>Materials</h4>
                            <p>{this.props.proj.material}</p>
                            <h4>Cut List</h4>
                            <p>{this.props.proj.cutList}</p>
                            <h4>Instructions</h4>
                            <p>{this.props.proj.instructions}</p>
                        </div>
                    </Row>
                </Container>

            </div>
        )
    }
}
