import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewPost from '../components/NewPost'
import * as actions from '../actions'

class NewPostContainer extends Component {
  componentDidMount() {
    this.props.handleReceiveCategories()
  }

  render() {
    const { categories } = this.props
    return (
      (categories && categories.length) ?
        <NewPost categories={categories}/> : null
    )
  }
}

function mapStateToProps({ categoriesReducer }) {
  const { categories } = categoriesReducer
  return {
    categories
  }
}

export default connect(
  mapStateToProps,
  actions
)(NewPostContainer)


