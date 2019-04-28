import * as actions from './Types'
import { getInitialData, getPostsByCategory, getPosts } from '../utils/api'

// Posts Reducer
function receivePosts(posts) {
  return {
    type: actions.RECEIVE_POSTS,
    posts
  }
}

export const handleReceivePosts = () => dispatch => {
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

// Shared
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
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
  getPostsByCategory(category)
    .then(posts => dispatch(receivePostsByCategory(posts)))
)

function receivePostsByCategory (posts = []) {
  return {
    type: actions.RECEIVE_POSTS_BY_CATEGORY,
    posts
  }
}