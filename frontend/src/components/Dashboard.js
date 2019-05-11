import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../App.scss';
import AddPostButton from './AddPostButton'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { connect } from 'react-redux'
import SortingOptions from './SortingOptions'
import * as actions from '../actions'

class Dashboard extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      toHome: false
    }
    
    this.handleSortByScore = this.handleSortByScore.bind(this);
    this.handleSortByDate = this.handleSortByDate.bind(this);
  }

  handleSortByScore(posts) {
    this.props.dispatch(actions.sortPostsByScore(posts))
  }

  handleSortByDate(posts) {
    this.props.dispatch(actions.sortPostsByDate(posts))
  }

  render() {
    const { postIds } = this.props
    return (
      <>
        <Container className="dashboard-container">
          <SortingOptions 
            list={this.props.posts} 
            sortByScore={this.handleSortByScore}
            sortByDate={this.handleSortByDate}
          />
          {postIds.length > 0 ? (
            postIds.map((id) => (
              <Post key={id} id={id} />
            ))) : <h1 style={{ textAlign: 'center' }}>No posts yet</h1>}
          <Link to='/newPost'>
            <AddPostButton />
          </Link>
        </Container>
      </>
    )
  }
}

function mapStateToProps({ postsReducer }, props) {
  const { category } = props.match.params
  const posts = category ? postsReducer.posts.filter(p => p.category === category) : postsReducer.posts

  return {
    postIds: posts.map((p) => p.id),
    posts
  }
}

export default connect(mapStateToProps)(Dashboard)