import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Container } from 'react-bootstrap'
import '../App.scss';
import AddPostButton from './AddPostButton'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { posts } = this.props
    return (
      <Container className="dashboard-container">
        {posts && posts.length ? (
          posts.map((post) => (
            <Post key={post.id} id={post.id} />
          ))) : <h1>No posts found</h1>}
        <Link to='/newPost'>
          <AddPostButton />
        </Link>
      </Container>
    )
  }
}

function mapStateToProps({ postsReducer }) {
  const { posts } = postsReducer
  return {
    posts,
  }
}

export default connect(mapStateToProps)(Dashboard)