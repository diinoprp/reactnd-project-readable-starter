import React, { Component } from 'react';
import Post from './Post'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'
import { Button } from 'react-bootstrap'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
  deletePost(id) {
    this.props.dispatch(actions.handleDeletePost(id))
  }

  editPost(id, title, body) {
    this.props.dispatch(actions.handleEditPost(id, title, body))
  }

  render() {
    const postId = this.props.match.params.post_id
    return (
      <Container className="dashboard-container">

        <Link to='/newPost'params={{ postId }}>
          <Button style={{ marginRight: 15 }}>Editar</Button>
        </Link>
        <Button onClick={() => this.deletePost(postId)}>Apagar</Button>
        <Post key={postId} id={postId} />
        <CommentsList postId={postId} />
      </Container>
    );
  }
}

export default connect()(PostDetail)