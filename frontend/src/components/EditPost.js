import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions'

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      toHome: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.handleReceivePost(this.props.match.params.post_id))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { post, dispatch } = this.props
    const title = this.state.title === '' ? post.title : this.state.title
    const body = this.state.body === '' ? post.body : this.state.body

    dispatch(actions.handleEditPost(post.id, title, body))
    this.setState({ toHome: true })
  }

  render() {
    const { categories, post } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <Container className="dashboard-container">
        <h1>Edit Post</h1>
        <hr style={{ backgroundColor: 'white' }} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="postAuthor">
            <Form.Control
              type="text"
              placeholder="Author *"
              required
              onChange={(e) => this.setState({ author: e.target.value })}
              value={post ? post.author : ''}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="postTitle">
            <Form.Control
              type="text"
              placeholder="Title *"
              required
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title || post.title}
            />
          </Form.Group>

          <Form.Group controlId="postCategory">
            <Form.Control
              as="select"
              required
              onChange={(e) => this.setState({ category: e.target.value })}
              value={post ? post.category : ''}
              disabled
            >
              <option value="" disabled>Category *</option>
              {(categories && categories.length) &&
                categories.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="postText">
            <Form.Control
              as="textarea"
              rows="10"
              placeholder="Text *"
              required
              onChange={(e) => this.setState({ body: e.target.value })}
              value={this.state.body || post.body}
            />
          </Form.Group>

          <Button
            variant="primary"
            size="lg"
            block
            type="submit">
            Save
          </Button>
        </Form>
      </Container >
    )
  }
}

function mapsStateToProps({ categoriesReducer, postsReducer }) {
  const { categories } = categoriesReducer
  const { post } = postsReducer
  return {
    post,
    categories
  }
}

export default connect(mapsStateToProps)(EditPost)