import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import ReactTimeAgo from 'react-time-ago'
import './Post.scss'
import Score from './Score';
import { TiMessage } from 'react-icons/ti'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import OptionsMenu from './OptionsMenu';

class Post extends Component {
  constructor(props) {
    super(props)
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
  }

  votePost(id, vote) {
    this.props.dispatch(actions.handleVotePost(id, vote))
  }

  handleTitleClick(id) {
    this.props.dispatch(actions.handleReceivePost(id))
  }

  handleDeletePost(id) {
    this.props.dispatch(actions.handleDeletePost(id))
    this.setState({ toHome: true })
  }

  handleEditPost(id) {
    this.props.history.push(`/editPost/${id}`)
  }

  render() {
    const { post } = this.props

    if (post === null) {
      return <p>This Post doesn't exist</p>
    }

    const {
      author, body, category, commentCount, deleted, id, timestamp, title, voteScore
    } = post

    return (
      <Card className='post-card'>
        <Card.Header>
          <Link to={`/postDetail/${id}`} style={{ textDecoration: 'none', color: '#E65100'}}>
            <Card.Title>
              <h1>
                {title}
              </h1>
            </Card.Title>
          </Link>
          <div className="text-muted">
            <span>Posted by {author} </span>
            <ReactTimeAgo date={timestamp} />
            <span> in {category}</span>
          </div>
        </Card.Header>
        <Card.Body className="post-card-body">
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="post-card-footer justify-content-between">
          <Score type='Post' id={id} voteScore={voteScore} voteFunction={this.votePost.bind(this)} />
          <Link to={`/postDetail/${this.props.id}`}>
            <div className='post-comments inline-block'>
              <button
                className="btn"
                type="button">
                <TiMessage className="react-icons" size='1.8em' />
                {commentCount} Comments
              </button>
            </div>
          </Link>
          <OptionsMenu contentId={id} deleteContent={this.handleDeletePost} editContent={this.handleEditPost} />
        </Card.Footer>
      </Card>
    )
  }
}


function mapStateToProps({ postsReducer }, { id }) {
  const { posts } = postsReducer
  const post = posts.find((p) => p.id === id)
  return {
    post: post ? post : null
  }
}

export default withRouter(connect(mapStateToProps)(Post))