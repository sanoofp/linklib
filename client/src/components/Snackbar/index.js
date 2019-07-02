import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { snackbarToggle } from "../../actions/appStateAction";

const SnackbarComponent = props => {
  const { snackbar } = props.appState;

  const defaultIconStyle = { fontSize: 20, opacity: 0.9, marginRight: 12 };
  const bgColor = snackbar.type === "error" ? red.A400 : green.A400;
  const icon =
    snackbar.type === "error" ? (
      <ErrorIcon style={defaultIconStyle} />
    ) : (
      <CheckCircleIcon style={defaultIconStyle} />
    );
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snackbar.open}
      onClose={() => props.snackbarToggle(false, snackbar.msg, snackbar.type)}
      autoHideDuration={5000}
    >
      <SnackbarContent
        style={{ backgroundColor: bgColor }}
        message={
          <div
            id="message-id"
            style={{ display: "flex", alignItems: "center" }}
          >
            {icon}
            {snackbar.msg}
          </div>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => props.snackbarToggle(false, "", snackbar.type)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

SnackbarComponent.propTypes = {
  snackbarToggle: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { snackbarToggle }
)(SnackbarComponent);
