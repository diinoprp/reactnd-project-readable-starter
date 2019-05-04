import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../App.scss';
import AddPostButton from './AddPostButton'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { postIds } = this.props
    return (
      <>
        <Container className="dashboard-container">
          {postIds.length > 0 ? (
            postIds.map((id) => (
              <Post key={id} id={id} />
            ))) : <h1 style={{textAlign: 'center'}}>No posts yet</h1>}
          <Link to='/newPost'>
            <AddPostButton />
          </Link>
        </Container>
      </>
    )
  }
}

function mapStateToProps({ postsReducer }) {
  const { posts } = postsReducer
  return {
    postIds: posts.map((p) => p.id)
  }
}

export default connect(mapStateToProps)(Dashboard)