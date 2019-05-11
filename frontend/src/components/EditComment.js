import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions'

class EditComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toHome: false,
      body: '',
      author: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.handleReceiveComment(this.props.commentId))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { comment, dispatch } = this.props
    const body = this.state.body === '' ? comment.body : this.state.body

    dispatch(actions.handleEditComment(comment.id, body))
    this.setState({ toHome: true })
  }

  render() {
    const { comment } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to={`/postDetail/${comment.parentId}`} />
    }
    
    return (
      <Container className="dashboard-container">
        <h1>Edit Comment</h1>
        <hr style={{ backgroundColor: 'white' }} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="commentAuthor">
            <Form.Control
              type="text"
              placeholder="Author *"
              required
              onChange={(e) => this.setState({ author: e.target.value })}
              value={this.state.author || comment.author}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="commentText">
            <Form.Control
              as="textarea"
              rows="10"
              placeholder="Text *"
              required
              onChange={(e) => this.setState({ body: e.target.value })}
              value={this.state.body || comment.body}
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

function mapsStateToProps({ commentsReducer }, props) {
  const { comment } = commentsReducer
  const commentId = props.match.params.comment_id
  return {
    comment,
    commentId
  }
}

export default connect(mapsStateToProps)(EditComment)