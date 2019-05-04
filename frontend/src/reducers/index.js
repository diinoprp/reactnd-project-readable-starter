import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer'
import commentsReducer from './commentsReducer'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  postsReducer,
  categoriesReducer,
  commentsReducer,
  loadingBar: loadingBarReducer
})