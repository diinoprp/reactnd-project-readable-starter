import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Score from './Score'
import ReactTimeAgo from 'react-time-ago'
import { handleVoteComment } from '../actions'
import { connect } from 'react-redux'
import OptionsMenu from './OptionsMenu'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleEditComment = this.handleEditComment.bind(this);
  }

  voteComment(id, vote) {
    this.props.dispatch(handleVoteComment(id, vote))
  }

  handleDeleteComment(id) {
    this.props.dispatch(actions.handleDeleteComment(id))
  }

  handleEditComment(id) {
    this.props.history.push(`/editComment/${id}`)
  }

  render() {
    const { comment } = this.props
    const { id, timestamp, body, author, voteScore } = comment

    return (
      <Card className='post-card'>
        <Card.Header className="text-muted">
          Commented by {author} <ReactTimeAgo date={timestamp} />
        </Card.Header>
        <Card.Body>
          {body}
        </Card.Body>
        <Card.Footer>
          <Score id={comment.id} voteScore={voteScore} type={`Comment`} voteFunction={this.voteComment.bind(this)} />
          <OptionsMenu contentId={id} deleteContent={this.handleDeleteComment} editContent={this.handleEditComment} />
        </Card.Footer>
      </Card>
    )
  }
}

export default withRouter(connect()(Comment))