import * as actions from './Types'
import * as API from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading';

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

function votePost(post) {
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
    dispatch(showLoading())
    return API.getInitialData()
      .then(({ posts, categories }) => {
        dispatch(handleReceivePosts(posts))
        dispatch(handleReceiveCategories(categories))
        dispatch(hideLoading())
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

function receivePostsByCategory(posts = []) {
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
    type: actions.RECEIVE_COMMENTS_BY_POST,
    comments
  }
}

export const handleCreatePost = (id, timestamp, title, body, author, category) => dispatch => (
  API.createPost(id, timestamp, title, body, author, category)
    .then(post => dispatch(createPost(post)))
)

function createPost(post) {
  return {
    type: actions.CREATE_POST,
    post
  }
}

export const handleDeletePost = (id) => dispatch => (
  API.deletePost(id)
    .then(post => dispatch(deletePost(post)))
)

function deletePost(post) {
  return {
    type: actions.DELETE_POST,
    post
  }
}

export const handleEditPost = (id, title, body) => dispatch => (
  API.editPost(id, title, body)
    .then(post => dispatch(editPost(post)))
)

function editPost (post) {
  return {
    type: actions.EDIT_POST,
    post
  }
}

export const handleDeleteComment = (id) => dispatch => (
  API.deleteComment(id)
    .then(comment => dispatch(deleteComment(comment)))
)

function deleteComment(comment) {
  return {
    type: actions.DELETE_COMMENT,
    comment
  }
}

export const handleEditComment = (id, body) => dispatch => (
  API.editComment(id, body)
    .then(comment => dispatch(editComment(comment)))
)

function editComment(comment) {
  return {
    type: actions.EDIT_COMMENT,
    comment
  }
}

export const handleCreateComment = (id, timestamp, body, author, parentId) => dispatch => (
  API.createComment(id, timestamp, body, author, parentId)
    .then(comment => dispatch(createComment(comment)))
)

function createComment(comment) {
  return {
    type: actions.CREATE_COMMENT,
    comment
  }
}

export const handleReceiveComment = (id) => dispatch => (
  API.getComment(id)
    .then(comment => dispatch(receiveComment(comment)))
)

function receiveComment(comment) {
  return {
    type: actions.RECEIVE_COMMENT,
    comment
  }
}

export function sortPostsByDate(posts) {
  return {
    type: actions.SORT_POSTS_BY_DATE,
    posts
  }
}

export function sortPostsByScore(posts) {
  return {
    type: actions.SORT_POSTS_BY_SCORE,
    posts
  }
}

export function sortCommentsByDate(comments) {
  return {
    type: actions.SORT_COMMENTS_BY_DATE,
    comments
  }
}

export function sortCommentsByScore(comments) {
  return {
    type: actions.SORT_COMMENTS_BY_SCORE,
    comments
  }
}