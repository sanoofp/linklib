import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import A from "../../Button/A";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy", onClick: () => console.log("copy") },
  { icon: <ShareIcon />, name: "Share", onClick: () => console.log("share") },
  { icon: <DeleteIcon />, name: "Delete", onClick: () => console.log("delete") }
];

const SpeedDialComponent = props => (
  <SpeedDial
    ariaLabel="SpeedDial tooltip"
    hidden={props.sdHidden}
    icon={<SpeedDialIcon style={{ color: "#fff" }} />}
    onBlur={props.handleClose}
    onClick={props.handleClick}
    onClose={props.handleClose}
    onFocus={props.handleOpen}
    onMouseEnter={props.handleOpen}
    onMouseLeave={props.handleClose}
    open={props.sdOpen}
    direction="left"
  >
    {actions.map(action => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        tooltipPlacement="top"
        tooltipOpen
        onClick={action.onClick}
      />
    ))}
  </SpeedDial>
);

export default SpeedDialComponent;