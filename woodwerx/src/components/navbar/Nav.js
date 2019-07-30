import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


export default class Nav extends Component {

    render() {
        return (
            <React.Fragment>
                {/* <header class="banner">WoodWerx</header> */}

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tools">Tools</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>

                    </ul>
                </nav>
            </React.Fragment>
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link href="#home">Home</Nav.Link>
            //             <Nav.Link href="#link">Link</Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}
