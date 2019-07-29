import React, { Component } from 'react'
import Nav from './components/navbar/Nav'
import AppViews from './components/AppViews';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <AppViews />
      </React.Fragment>
    )
  }
}

