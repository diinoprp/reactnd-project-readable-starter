import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import ReactTimeAgo from 'react-time-ago'
import './Post.scss'
import PostScore from './PostScore';
import { TiMessage } from 'react-icons/ti'

class Post extends Component {
  render() {
    const { post } = this.props

    const {
      author, body, category, commentCount, deleted, id, timestamp, title, voteScore
    } = post

    return (
      <Card className='post-card'>
        <Card.Header>
          <Card.Title>
            <h1>
              {title}
            </h1>
          </Card.Title>
          <div className="text-muted">
            <span>Posted by {author} </span>
            <ReactTimeAgo date={timestamp} />
          </div>

        </Card.Header>
        <Card.Body className="post-card-body">
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="post-card-footer">
          <PostScore post={post}/>
          <div className='post-comments inline-block'>
            <button
              className="btn"
              type="button">
              <TiMessage className="react-icons" size='1.8em' />
              {commentCount} Comments
            </button>
          </div>
        </Card.Footer>
      </Card>
    )
  }
}

function mapStateToProps({ postsReducer }, { id }) {
  const post = postsReducer.posts[id]

  return {
    post
  }
}

export default connect(mapStateToProps)(Post)