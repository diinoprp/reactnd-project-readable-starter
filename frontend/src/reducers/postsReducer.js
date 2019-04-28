import * as actions from '../actions/Types'

export default function posts(state = [], action) {
  switch (action.type) {
    case actions.RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    case actions.RECEIVE_POSTS_BY_CATEGORY:
      return {
        ...action.posts
      }
    default:
      return state
  }
}