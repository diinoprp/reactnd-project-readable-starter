import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleReceiveCommentsByPost } from '../actions';
import Comment from './Comment'

class CommentsList extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveCommentsByPost(this.props.postId))
  }

  render() {
    const { comments } = this.props
    return (
      <>
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