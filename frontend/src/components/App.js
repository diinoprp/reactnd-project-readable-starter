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
import LoadingBar from 'react-redux-loading'
import EditPost from './EditPost'

library.add(faPlus)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <Menu />
        {this.props.loading
          ? null
          : <>
            <Route exact path='/' component={Dashboard} />
            <Route exact path={`/postDetail/:post_id`} component={PostDetail} />
            <Route exact path='/newPost' component={NewPost} />
            <Route exact path={`/editPost/:post_id`} component={EditPost} />
          </>
        }
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);