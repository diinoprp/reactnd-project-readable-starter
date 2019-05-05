import React, { Component } from 'react';
import Post from './Post'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toHome: false
    }
  }

  render() {
    const { id } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }
    return (
      <Container className="dashboard-container">
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