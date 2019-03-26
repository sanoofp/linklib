import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fade from '@material-ui/core/Fade';

export const SnackbarComponent = props => {
  const defaultIconStyle = { fontSize: 20, opacity: 0.9, marginRight: 12 };
  const bgColor = props.type === "success" ? green.A400 : red.A400;
  const icon = props.type === "error" ? <ErrorIcon style={defaultIconStyle} /> : <CheckCircleIcon style={defaultIconStyle} />
  return <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    open={props.open}
    onClose={() => props.handleSnackbarClose()}
    autoHideDuration={5000}
    TransitionComponent={Fade}
  >
    <SnackbarContent
      style={{ backgroundColor: bgColor }}
      message={<div id="message-id" style={{ display: "flex", alignItems: "center" }}>
        {icon}
        {props.msg}
      </div>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.handleSnackbarClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  </Snackbar>
}

