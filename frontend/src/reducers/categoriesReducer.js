import * as actions from '../actions/Types'

export default function categories (state = [], action) {
  switch(action.type) {
    case actions.RECEIVE_CATEGORIES :
      return {
        ...state,
        ...action.categories
      }
      default:
        return state
  }
}