import * as actions from '../actions/Types'

const initialState = {
  posts: [],
  post: null
}
export default function postsReducer(state = initialState, action) {
  const { posts, post } = action
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
          return (currentPost.id === post.id) ? post : currentPost
        })
      }
    default:
      return state
  }
}