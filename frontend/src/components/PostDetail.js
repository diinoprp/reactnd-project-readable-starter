import React, { Component } from 'react';
import Post from './Post'

class PostDetail extends Component {
  render() {
    const postId = this.props.match.params.post_id
    return (
      <Post key={postId} id={postId}/>
    );
  }
}

export default PostDetail