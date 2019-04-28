import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Score from './Score'
import ReactTimeAgo from 'react-time-ago'

class Comment extends Component {
  render() {
    const { comment } = this.props
    const {
      id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
    } = comment
    return (
      <Card className='post-card'>
        <Card.Header className="text-muted">
          Commented by {author} <ReactTimeAgo date={timestamp} />
        </Card.Header>
        <Card.Body>
          {body}
        </Card.Body>
        <Card.Footer>
          <Score id={comment.id} voteScore={voteScore} type={`Comment`} />
        </Card.Footer>
      </Card>
    )
  }
}

export default Comment