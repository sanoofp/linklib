import React from "react";
import WbIncandescentRounded from "@material-ui/icons/WbIncandescentRounded";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItems from "./ListItems";
import ListItemComponent from "./ListItemComponent";

const DrawerContent = () => (
  <React.Fragment>
    <ListItems />
    <Divider />
    <List subheader={<ListSubheader>More</ListSubheader>}>
      <ListItemComponent
        toggle={true}
        text="Dark Theme"
        icon={<WbIncandescentRounded />}
      />
    </List>
  </React.Fragment>
);

export default DrawerContent;
