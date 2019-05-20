import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

function Page404() {
  return <h1>Page not found!</h1>;
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/newPost' component={NewPost} />
          <Route exact path='/:category' component={Dashboard} />
          <Route exact path={`/editComment/:comment_id`} component={EditComment} />
          <Route exact path={`/editPost/:post_id`} component={EditPost} />
          <Route exact path={`/:category/:post_id`} component={PostDetail} />

          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);