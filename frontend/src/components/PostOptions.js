import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TiEdit, TiTrash } from "react-icons/ti"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

const ITEM_HEIGHT = 48;

class PostOptions extends React.Component {
  state = {
    anchorEl: null,
  };

  handleDeleteClick = event => {
    const { postId, deletePost } = this.props
    deletePost(postId)
    this.setState({ anchorEl: event.currentTarget });
  }

  handleEditClick = event => {
    const { postId, history } = this.props

    history.push(`/editPost/${postId}`)
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div style={{ float: 'right' }}>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon style={{ color: 'white' }} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
              color: 'red'
            },
          }}
        >
          <MenuItem onClick={this.handleEditClick}>
            <ListItemIcon>
              <TiEdit className="react-icons" size='1.8em' />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Edit
              </Typography>
          </MenuItem>

          <MenuItem onClick={this.handleDeleteClick}>
            <ListItemIcon>
              <TiTrash className="react-icons" size='1.8em' />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Delete
          </Typography>
          </MenuItem>

        </Menu>
      </div >
    );
  }
}

export default withRouter(PostOptions);