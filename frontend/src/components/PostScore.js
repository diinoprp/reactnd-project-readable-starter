import React, { Component } from 'react'
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import { handleVotePost } from '../actions'
import { connect } from 'react-redux'

class PostScore extends Component {
  votePost = (id, vote) => {
    this.props.dispatch(handleVotePost(id, vote))
  }

  render() {
    const { id, voteScore } = this.props.post
    return (
      <div className='post-score inline-block'>
        <button className="btn" onClick={() => this.votePost(id, 'upVote')}>
          <TiArrowUp className="react-icons" size='2em' />
        </button>
        {voteScore}
        <button className="btn" onClick={() => this.votePost(id, 'downVote')}>
          <TiArrowDown className="react-icons" size='2em' />
        </button>
      </div>
    )
  }
}

export default connect()(PostScore)