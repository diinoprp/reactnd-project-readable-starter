import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import uuid from "uuid";
import * as actions from '../actions'

class NewComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: uuid.v4(),
      timestamp: (new Date()).getTime(),
      author: '',
      body: '',
      parentId: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      timestamp: (new Date()).getTime(),
      id: uuid.v4()
    })

    const { id, timestamp, author, body } = this.state
    const parentId = this.props.postId
    
    this.props.dispatch(actions.handleCreateComment(id, timestamp, body, author, parentId))
    this.setState({
      body: '',
      author: ''
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="commentAuthor">
            <Form.Control
              type="text"
              placeholder="Author *"
              required
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="commentText">
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Text *"
              required
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" size="lg" block type="submit">
            Comment
          </Button>
        </Form>
      </Container >
    )
  }
}

export default connect()(NewComment)