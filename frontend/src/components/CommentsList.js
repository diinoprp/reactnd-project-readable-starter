import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleReceiveCommentsByPost } from '../actions';
import Comment from './Comment'
import SortingOptions from './SortingOptions'
import * as actions from '../actions'

class CommentsList extends Component {
  constructor(props) {
    super(props)
    
    this.handleSortByScore = this.handleSortByScore.bind(this);
    this.handleSortByDate = this.handleSortByDate.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(handleReceiveCommentsByPost(this.props.postId))
  }

  handleSortByScore(comments) {
    this.props.dispatch(actions.sortCommentsByScore(comments))
  }

  handleSortByDate(comments) {
    this.props.dispatch(actions.sortCommentsByDate(comments))
  }

  render() {
    const { comments } = this.props
    return (
      <>
      {comments && comments.length > 0 && 
        <SortingOptions
          list={comments}
          sortByScore={this.handleSortByScore}
          sortByDate={this.handleSortByDate}
        />
      }
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    );
  }
}

function mapStateToProps({ commentsReducer }, { postId }) {
  const comments = commentsReducer.comments.filter(comment => comment.parentId === postId)

  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentsList)