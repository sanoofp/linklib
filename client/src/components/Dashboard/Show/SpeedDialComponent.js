import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import copy from "../../../functions/copy";
import share from "../../../functions/share";

const SpeedDialComponent = props => {
  const actions = [
    { icon: <DeleteIcon />, name: "Delete", onClick: () => console.log("delete") },
    { icon: <FileCopyIcon />, name: "Copy", onClick: () => copy(props.link._id, props.copiedMsg) },
    { icon: <ShareIcon />, name: "Share", onClick: () => share(props.link) },
  ];

  return <SpeedDial
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
}

export default SpeedDialComponent;