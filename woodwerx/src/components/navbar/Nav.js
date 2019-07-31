// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'


// export default class Nav extends Component {

//     render() {
//         return (

                // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                //         aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                //         <span className="navbar-toggler-icon"></span>
                //     </button>
                //     <ul className="navbar-nav">
                //         <li className="nav-item">
                //             <Link className="nav-link" to="/home">Home</Link>
                //         </li>
                //         <li className="nav-item">
                //             <Link className="nav-link" to="/tools">Tools</Link>
                //         </li>
                //         <li className="nav-item">
                //             <Link className="nav-link" to="/favorites">Favorites</Link>
                //         </li>

                //     </ul>
                // </nav>
            
//         )
//     }
// }

import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleLogout() {
    sessionStorage.clear()
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto"/>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/myprojects">My Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tools">Tools</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tools">Favorites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tools">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleLogout} href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
