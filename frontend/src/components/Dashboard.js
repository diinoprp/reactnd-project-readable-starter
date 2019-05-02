import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../App.scss';
import AddPostButton from './AddPostButton'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

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

export default Dashboard