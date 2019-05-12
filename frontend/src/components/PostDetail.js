import React, { Component } from 'react';
import Post from './Post'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'
import { Redirect } from 'react-router-dom'
import NewComment from './NewComment'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toHome: false
    }
  }

  render() {
    const id = this.props.match.params.post_id
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }
    return (
      <Container className="dashboard-container">
        <Post key={id} id={id} />
        <hr style={{ backgroundColor: 'white' }} />
        <h2>Comments:</h2>
        <NewComment postId={id} />
        <hr style={{ backgroundColor: 'white' }} />
        <CommentsList postId={id} />
      </Container>
    );
  }
}

export default (PostDetail)