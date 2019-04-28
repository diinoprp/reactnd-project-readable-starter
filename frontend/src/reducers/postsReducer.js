import * as actions from '../actions/Types'

const initialState = {
  posts: []
}

export default function posts(state = initialState, action) {
  const { posts } = action

  switch (action.type) {
    case actions.RECEIVE_POSTS:
      return {
        ...state,
        posts
      }
    case actions.RECEIVE_POSTS_BY_CATEGORY:
      return {
        posts
      }
    case actions.VOTE_POST:
      return {
        ...state,
        posts: state.posts.map(currentPost => {
          return (currentPost.id === action.post.id) ? action.post : currentPost
        })
      }
    default:
      return state
  }
}