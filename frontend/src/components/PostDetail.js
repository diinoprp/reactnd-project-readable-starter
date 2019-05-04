import React, { Component } from 'react';
import Post from './Post'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'
import { Button } from 'react-bootstrap'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toHome: false
    }
  }

  deletePost(id) {
    this.props.dispatch(actions.handleDeletePost(id))
    this.setState({ toHome: true })
  }

  editPost(id, title, body) {
    this.props.dispatch(actions.handleEditPost(id, title, body))
    this.setState({ toHome: true })
  }

  render() {
    const { id } = this.props
    const { toHome } = this.state
    
    if (toHome) {
      return <Redirect to='/' />
    }
    return (
      <Container className="dashboard-container">
        <Link to='/newPost' params={id}>
          <Button style={{ marginRight: 15 }}>Editar</Button>
        </Link>
        <Button onClick={() => this.deletePost(id)}>Apagar</Button>
        <Post key={id} id={id} />
        <CommentsList postId={id} />
      </Container>
    );
  }
}

function mapStateToProps({ postsReducer }, props) {
  const id = props.match.params.post_id

  return {
    id
  }
}

export default connect(mapStateToProps)(PostDetail)