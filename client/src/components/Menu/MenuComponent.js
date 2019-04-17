import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { DeleteRounded, MobileScreenShareRounded, MoreVertRounded, IconButton, ShareRounded, EditRounded, LockRounded, LockOpenRounded } from "./Icons"; 
import { ShowLinkMenuItems } from "./styles";
import { deleteSingleLink, socketEmit } from "../../actions/linkAction";
import { snackbarToggle } from "../../actions/appStateAction";
import androidShare from "../../functions/androidShare";

class MenuComponent extends Component {
  state = {
    anchorEl: null,
    redirect: false
  };

  handleClick = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  share = () => androidShare(this.props.link, () =>
    this.props.snackbarToggle(true, "Web Share API not Supported", "error")
  );

  deleteLink = id => {
    const { deleteSingleLink } = this.props;
    deleteSingleLink(id);
    if(window.location.pathname !== "/dashboard") {
      this.setState({ redirect: true })
    }
  }

  render() {
    const { anchorEl, redirect } = this.state;
    const { link, socketEmit } = this.props;

    const menuItems = [
      {
        onClick: () => {socketEmit(link._id);this.handleClose();},
        icon: <MobileScreenShareRounded />,
        text: "Push to devices"
      },
      {
        onClick: () => {this.share();this.handleClose();},
        icon: <ShareRounded />,
        text: "Share"
      },
      {
        onClick: () => {this.handleClose();},
        icon: link.public_link ? <LockOpenRounded /> : <LockRounded />,
        text: link.public_link ? "Link is Public" : "Link is Private"
      },
      {
        onClick: () => {this.deleteLink(link._id);this.handleClose();},
        icon: <DeleteRounded />,
        text: "Delete"
      },
      {
        style: { fontSize: "0.7em" },
        text: `Create at ${new Date(link.date).toDateString()}`
      },
    ]

    if(redirect) {
      return <Redirect to="/dashboard" />
    }

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
          {menuItems.map(menuItem => <MenuItem key={menuItem.text} onClick={menuItem.onClick} style={menuItem.style}>
            {menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon> }
            {menuItem.text}
          </MenuItem>)}
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
  { deleteSingleLink, socketEmit, snackbarToggle }
)(MenuComponent);
