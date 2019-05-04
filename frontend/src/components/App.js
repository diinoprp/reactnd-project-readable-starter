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
import NewPost from './NewPost'

library.add(faPlus)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Menu categories={this.props.categories} />
        <Route path='/' exact component={Dashboard} />
        <Route exact path={`/:category/:post_id`} render={(props) => (
          <PostDetail {...props} />
        )} />
        <Route path='/newPost' exact component={NewPost} />
      </Router>
    );
  }
}
export default connect()(App);