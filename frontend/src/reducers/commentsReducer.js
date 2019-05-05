import * as actions from '../actions/Types'

const initialState = {
  comments: [],
  comment: {}
}

export default function posts(state = initialState, action) {
  const { comments, comment } = action

  switch (action.type) {
    case actions.RECEIVE_COMMENTS_BY_POST:
      return {
        ...state,
        comments
      }
    case actions.VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(currentComment => {
          return (currentComment.id === action.comment.id) ? action.comment : currentComment
        })
      }
    case actions.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(currentComment => {
          return currentComment.id !== comment.id
        })
      }
    case actions.EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(currentComment => {
          return (currentComment.id === comment.id) ? comment : currentComment
        })
      }
    case actions.CREATE_COMMENT:
      return {
        ...state,
        comments: state.comments.concat([{ ...comment }])
      }
    case actions.RECEIVE_COMMENT:
      return {
        ...state,
        comment
      }
    default:
      return state
  }
}