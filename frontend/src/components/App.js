import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Menu from './Menu'
import Dashboard from './Dashboard'
import '../App.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Menu />
        <Route path='/' exact component={Dashboard} />
      </Router>
    );
  }
}

export default connect()(App);