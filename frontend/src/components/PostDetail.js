import React, { Component } from 'react';
import Post from './Post'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'

class PostDetail extends Component {
  render() {
    const postId = this.props.match.params.post_id
    return (
      <Container className="dashboard-container">
        <Post key={postId} id={postId} />
        <CommentsList postId={postId} />
      </Container>
    );
  }
}


export default PostDetail