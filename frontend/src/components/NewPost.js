import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class NewPost extends Component {
  render() {
    const { categories } = this.props
    console.log(categories)
    return (
      <Container className="dashboard-container">
        <h1>Create Post</h1>
        <hr />
        <Form>
          <Form.Group controlId="postTitle">
            <Form.Control type="text" placeholder="Title*" required />
          </Form.Group>
          <Form.Group controlId="postCategory">
            <Form.Control as="select" required defaultValue=''>
              <option value="" disabled>Category*</option>
              {categories.map((category) => (
                <option key={category.name}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="postText">
            <Form.Control as="textarea" rows="10" placeholder="Text*" required />
          </Form.Group>
          <Button variant="primary" size="lg" block className="pull-right" type="submit">
            Submit
            </Button>
        </Form>
      </Container>
    )
  }
}

export default NewPost