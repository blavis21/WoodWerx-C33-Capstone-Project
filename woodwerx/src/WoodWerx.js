import React, { Component } from 'react'
import Example from './components/navbar/Nav'
import Login from './components/Authentication/Login'
import AppViews from './components/AppViews';
import './App.css'

export default class App extends Component {

  // state = {
  //   authenticated: sessionStorage.getItem("user")
  // }

  // setAuthState = () => {
  //   if (sessionStorage.getItem("user")) {
  //     this.setState({ authenticated: true })
  //   } else {
  //     this.setState({ authenticated: false })
  //   }
  // }
  render() {
    // if (this.state.authenticated) {
      return (
        <React.Fragment>
          <Example />
          <AppViews />
        </React.Fragment>
      )
  //   } else {
  //     return (
  //         <Login setAuthState={this.setAuthState} />
  //     )
  //   }
  // }
}}

