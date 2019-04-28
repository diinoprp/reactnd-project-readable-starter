import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Container } from 'react-bootstrap'
import '../App.scss';

class Dashboard extends Component {
  render() {
    return (
      <Container className="dashboard-container">
        {this.props.postIds.map((id) => (
          <Post key={id} id={id} />
        ))}
      </Container>
    )
  }
}

function mapStateToProps({ postsReducer }) {
  const { posts } = postsReducer
  return {
     postIds: Object.keys(posts)
      .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)