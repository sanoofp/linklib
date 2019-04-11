import React from "react";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteRounded from "@material-ui/icons/DeleteRounded";
import MobileScreenShareRounded from "@material-ui/icons/MobileScreenShareRounded";
import { deleteSingleLink, socketEmit } from "../../../../actions/linkAction";

const MenuComponent = props => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      
      <MenuItem onClick={() => {props.socketEmit(props._id); props.handleClose();}}>
        <ListItemIcon><MobileScreenShareRounded /></ListItemIcon>
        Push to devices
      </MenuItem>
      <MenuItem onClick={() => {props.deleteSingleLink(props._id); props.handleClose()}}>
        <ListItemIcon><DeleteRounded /></ListItemIcon>
        Delete
      </MenuItem>
      <MenuItem style={{fontSize: "0.8em"}}>
        Create at {new Date(props.date).toDateString()}
      </MenuItem>
      
    </Menu>
  );
};

export default connect(null, { deleteSingleLink, socketEmit })(MenuComponent);
