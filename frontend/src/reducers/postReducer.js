import * as actions from '../actions/Types'

const initialState = {
  post: {}
}

export default function post(state = initialState, action) {
  const { post } = action

  switch (action.type) {
    case actions.RECEIVE_POST:
      return {
        ...state,
        post
      }
    default:
      return state
  }
}