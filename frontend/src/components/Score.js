import React, { Component } from 'react'
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import { handleVotePost, handleVoteComment } from '../actions'
import { connect } from 'react-redux'

class Score extends Component {
  handleVote = (id, vote) => {
    const { type } = this.props
    if (type === 'Comment')
      this.props.dispatch(handleVoteComment(id, vote))
    else if (type === 'Post')
      this.props.dispatch(handleVotePost(id, vote))
  }

  render() {
    const { id, voteScore } = this.props
    return (
      <div className='post-score inline-block'>
        <button className="btn" onClick={() => this.handleVote(id, 'upVote')}>
          <TiArrowUp className="react-icons" size='2em' />
        </button>
        {voteScore}
        <button className="btn" onClick={() => this.handleVote(id, 'downVote')}>
          <TiArrowDown className="react-icons" size='2em' />
        </button>
      </div>
    )
  }
}

export default connect()(Score)