import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Menu from './Menu'
import Dashboard from './Dashboard'
import '../App.scss';
import PostDetail from './PostDetail'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewPostContainer from '../containers/NewPostContainer';

library.add(faPlus)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Menu />
        <Route path='/' exact component={Dashboard} />
        <Route exact path={`/:category/:post_id`} render={(props) => (
          <PostDetail {...props}/>
        )}/>
        <Route path='/newPost' exact component={NewPostContainer} />
      </Router>
    );
  }
}

export default connect()(App);