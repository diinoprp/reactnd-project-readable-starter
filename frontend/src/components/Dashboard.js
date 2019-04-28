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
  console.log(postsReducer)
  return {
    postIds: Object.keys(postsReducer)
      .sort((a, b) => postsReducer[b].timestamp - postsReducer[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)