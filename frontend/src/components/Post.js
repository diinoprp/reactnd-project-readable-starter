import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import ReactTimeAgo from 'react-time-ago'
import { TiArrowUp, TiArrowDown, TiMessage } from "react-icons/ti";
import './Post.scss'

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
            <span>Posted by {post.author} </span>
            <ReactTimeAgo date={post.timestamp} />
          </div>

        </Card.Header>
        <Card.Body className="post-card-body">
          <Card.Text>
            {post.body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="post-card-footer">
          <div className='post-score inline-block'>
            <button
              className="btn"
            >
              <TiArrowUp className="react-icons" size='2em' />
            </button>
            {post.voteScore}
            <button
              className="btn"
            >
              <TiArrowDown className="react-icons" size='2em' />
            </button>
          </div>

          <div className='post-comments inline-block'>
            <button
              className="btn"
              type="button">
              <TiMessage className="react-icons" size='1.8em' />
              {post.commentCount} Comments
            </button>
          </div>
        </Card.Footer>
      </Card>
    )
  }
}

function mapStateToProps({ postsReducer }, { id }) {
  const post = postsReducer[id]

  return {
    post
  }
}

export default connect(mapStateToProps)(Post)