import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
   
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
        )
    }
}
