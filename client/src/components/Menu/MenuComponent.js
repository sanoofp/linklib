import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteRounded from "@material-ui/icons/DeleteRounded";
import MobileScreenShareRounded from "@material-ui/icons/MobileScreenShareRounded";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { deleteSingleLink, socketEmit } from "../../actions/linkAction";

const ShowLinkMenuItems = styled.div`
  position: absolute;
  top: 36px;
  right: 12px;
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

  render() {
    const { anchorEl } = this.state;
    const { _id, date, socketEmit, deleteSingleLink } = this.props;
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
        
        <MenuItem onClick={() => {socketEmit(_id); this.handleClose();}}>
          <ListItemIcon><MobileScreenShareRounded /></ListItemIcon>
          Push to devices
        </MenuItem>
        <MenuItem onClick={() => {deleteSingleLink(_id); this.handleClose()}}>
          <ListItemIcon><DeleteRounded /></ListItemIcon>
          Delete
        </MenuItem>
        <MenuItem style={{fontSize: "0.8em"}}>
          Create at {new Date(date).toDateString()}
        </MenuItem>
        
      </Menu>
      </ShowLinkMenuItems>
    );
  }
};

export default connect(null, { deleteSingleLink, socketEmit })(MenuComponent);
