import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { handleCreatePost } from '../actions'
import uuid from "uuid";
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: uuid.v4(),
      timestamp: (new Date()).getTime(),
      title: '',
      body: '',
      author: '',
      category: '',
      toHome: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { timestamp, title, body, author, category, id } = this.state
    this.props.dispatch(handleCreatePost(id, timestamp, title, body, author, category))
    this.setState({ toHome: this.props.id ? false : true })
  }

  render() {
    const { categories } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <Container className="dashboard-container">
        <h1>Create Post</h1>
        <hr style={{backgroundColor: 'white'}} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="postAuthor">
            <Form.Control
              type="text"
              placeholder="Author *"
              required
              onChange={(e) => this.setState({ author: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="postTitle">
            <Form.Control
              type="text"
              placeholder="Title *"
              required
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="postCategory">
            <Form.Control
              as="select"
              required
              defaultValue=''
              onChange={(e) => this.setState({ category: e.target.value })}
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
            />
          </Form.Group>

          <Button variant="primary" size="lg" block type="submit">
            Post
          </Button>
        </Form>
      </Container >
    )
  }
}

function mapsStateToProps({ categoriesReducer }) {
  const { categories } = categoriesReducer
  return {
    categories
  }
}

export default connect(mapsStateToProps)(NewPost)