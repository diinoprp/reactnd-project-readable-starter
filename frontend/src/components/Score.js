import React, { Component } from 'react'
import { TiArrowUp, TiArrowDown } from "react-icons/ti";

class Score extends Component {
  handleVote = (id, vote) => {
    this.props.voteFunction(id, vote)
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

export default Score