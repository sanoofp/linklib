import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItems from "./ListItems/ListItems";
import DrawerSettings from "./DrawerSettings/DrawerSettings";

const DrawerContent = () => (
  <React.Fragment>
    <ListItems />
    <Divider />
    <DrawerSettings />
  </React.Fragment>
);

export default DrawerContent;
