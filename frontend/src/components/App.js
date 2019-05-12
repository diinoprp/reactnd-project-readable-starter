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
import EditPost from './EditPost'
import EditComment from './EditComment'

library.add(faPlus)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Menu />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/categories/:category' component={Dashboard} />
        <Route exact path={`/postDetail/:post_id`} component={PostDetail} />
        <Route exact path='/newPost' component={NewPost} />
        <Route exact path={`/editPost/:post_id`} component={EditPost} />
        <Route exact path={`/editComment/:comment_id`} component={EditComment} />
        }
      </Router>
    );
  }
}

export default connect()(App);