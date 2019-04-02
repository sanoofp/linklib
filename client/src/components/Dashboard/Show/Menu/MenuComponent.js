import React from "react";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteRounded from "@material-ui/icons/DeleteRounded";
import { deleteSingleLink } from "../../../../actions/linkAction";

const MenuComponent = props => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      <MenuItem onClick={() => {props.deleteSingleLink(props._id); props.handleClose()}}>
        <ListItemIcon><DeleteRounded /></ListItemIcon>
        Delete
      </MenuItem>
    </Menu>
  );
};

export default connect(null, { deleteSingleLink })(MenuComponent);