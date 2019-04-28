import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  postsReducer,
  categoriesReducer
})