import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteRounded from "@material-ui/icons/DeleteRounded";
import MobileScreenShareRounded from "@material-ui/icons/MobileScreenShareRounded";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpRounded from "@material-ui/icons/ThumbUpRounded";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";
import ShareRounded from "@material-ui/icons/ShareRounded";
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import { deleteSingleLink, socketEmit, upvote } from "../../actions/linkAction";
import { snackbarToggle } from "../../actions/appStateAction";
import androidShare from "../../functions/androidShare";

const ShowLinkMenuItems = styled.div`
  position: absolute;
  top: 36px;
  right: 12px;
  p {
    margin: 0 !important;
  }
  small {
    display: block;
    margin-left: 6px;
    font-size: 0.6em;
  }
  @media (max-width: 485px) {
    right: 4px;
    top: 10px;
  }
`;

class MenuComponent extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  share = () => {
    androidShare(this.props.link, () =>
      this.props.snackbarToggle(true, "Web Share API not Supported", "error")
    );
  };

  render() {
    const { anchorEl } = this.state;
    const { link, socketEmit, deleteSingleLink, upvote } = this.props;
    
    let userUpvoted = false;
    this.props.link.vote.users.find(user => {
      if(this.props.auth.user._id === user.userID) {
        userUpvoted = true;
        return true
      }
    })

    return (
      <ShowLinkMenuItems>
        <IconButton onClick={this.handleClick}>
          <MoreVertRounded />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => {socketEmit(link._id);this.handleClose();}}>
            <ListItemIcon><MobileScreenShareRounded /></ListItemIcon>
            Push to devices
          </MenuItem>
          <MenuItem onClick={() => {this.share();this.handleClose();}}>
            <ListItemIcon><ShareRounded /></ListItemIcon>
            Share
          </MenuItem>
          <MenuItem onClick={() => {this.handleClose();upvote(link._id)}}>
            <ListItemIcon>
              <Badge badgeContent={link.vote.up} color="secondary">
                {userUpvoted ?<ThumbUpRounded /> : <ThumbUpOutlined />}  
              </Badge>
            </ListItemIcon>
            Up Vote
          </MenuItem>
          <MenuItem onClick={() => {deleteSingleLink(link._id);this.handleClose();}}>
            <ListItemIcon><DeleteRounded /></ListItemIcon>
            Delete
          </MenuItem>
          <MenuItem style={{ fontSize: "0.8em" }}>
            Create at {new Date(link.date).toDateString()}
          </MenuItem>
        </Menu>
      </ShowLinkMenuItems>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
})

export default connect(
  mapStateToProps,
  { deleteSingleLink, socketEmit, snackbarToggle, upvote }
)(MenuComponent);
