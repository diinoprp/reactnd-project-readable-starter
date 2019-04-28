import * as actions from './Types'
import * as API from '../utils/api'

// Posts Reducer
function receivePosts(posts) {
  return {
    type: actions.RECEIVE_POSTS,
    posts
  }
}

export const handleReceivePosts = () => dispatch => {
  API.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export function votePost (post) {
  return {
    type: actions.VOTE_POST,
    post
  }
}

export const handleVotePost = (id, vote) => dispatch => (
  API.votePost(id, vote)
    .then(post => dispatch(votePost(post)))
)

// Shared
export function handleInitialData() {
  return (dispatch) => {
    return API.getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receivePosts(posts))
        dispatch(receiveCategories(categories))
      })
  }
}

// Categories Reducer
export function receiveCategories(categories) {
  return {
    type: actions.RECEIVE_CATEGORIES,
    categories
  }
}

export const handleReceivePostsByCategory = (category) => dispatch => (
  API.getPostsByCategory(category)
    .then(posts => dispatch(receivePostsByCategory(posts)))
)

function receivePostsByCategory (posts = []) {
  return {
    type: actions.RECEIVE_POSTS_BY_CATEGORY,
    posts
  }
}