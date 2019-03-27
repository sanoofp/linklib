import React from "react";
import List from "@material-ui/core/List";
import WbIncandescentRounded from "@material-ui/icons/WbIncandescentRounded";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemComponent from "./ListItemComponent";

const DrawerSettings = props => <List subheader={<ListSubheader>Theme</ListSubheader>}>
  <ListItemComponent
    toggle={true}
    text="Dark Theme"
    icon={<WbIncandescentRounded />}
  />
</List>

export default DrawerSettings;