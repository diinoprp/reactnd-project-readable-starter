import * as actions from '../actions/Types'

const initialState = {
  comments: []
}

export default function posts(state = initialState, action) {
  const { comments } = action

  switch (action.type) {
    case actions.RECEIVE_COMMENTARIES_BY_POST:
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
    default:
      return state
  }
}