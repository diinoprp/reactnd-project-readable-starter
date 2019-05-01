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

function receivePost(post) {
  return {
    type: actions.RECEIVE_POST,
    post
  }
}

export const handleReceivePost = (id) => dispatch => {
  API.getPost(id)
    .then(post => dispatch(receivePost(post)))
}

function votePost (post) {
  return {
    type: actions.VOTE_POST,
    post
  }
}

export const handleVotePost = (id, vote) => dispatch => (
  API.votePost(id, vote)
    .then(post => dispatch(votePost(post)))
)

function voteComment(comment) {
  return {
    type: actions.VOTE_COMMENT,
    comment
  }
}

export const handleVoteComment = (id, vote) => dispatch => (
  API.voteComment(id, vote)
    .then(comment => dispatch(voteComment(comment)))
)

// Shared
export function handleInitialData() {
  return (dispatch) => {
    return API.getInitialData()
      .then(({ posts, categories }) => {
        dispatch(handleReceivePosts(posts))
        dispatch(handleReceiveCategories(categories))
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

export const handleReceiveCategories = () => dispatch => (
  API.getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
)


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

export const handleReceiveCommentsByPost = (post_id) => dispatch => (
  API.getCommentsByPost(post_id)
    .then(comments => dispatch(receiveCommentsByPost(comments)))
)

function receiveCommentsByPost(comments) {
  return {
    type: actions.RECEIVE_COMMENTARIES_BY_POST,
    comments
  }
}