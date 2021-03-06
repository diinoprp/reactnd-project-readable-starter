import * as actions from '../actions/Types'

const initialState = {
  posts: [],
  post: {}
}

export default function postsReducer(state = initialState, action) {
  const { posts, post } = action
  switch (action.type) {
    case actions.RECEIVE_POST:
      return {
        ...state,
        post
      }
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
    case actions.CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat([{ ...post }])
      }
    case actions.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(currentPost => {
          return currentPost.id !== post.id
        })
      }
    case actions.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(currentPost => {
          return (currentPost.id === post.id) ? post : currentPost
        })
      }
    case actions.SORT_POSTS_BY_DATE:
      return {
        ...state,
        posts: state.posts.slice().sort((a, b) => b.timestamp - a.timestamp)
      }
    case actions.SORT_POSTS_BY_SCORE:
      return {
        ...state,
        posts: state.posts.slice().sort((a, b) => b.voteScore - a.voteScore)
      }
    default:
      return state
  }
}