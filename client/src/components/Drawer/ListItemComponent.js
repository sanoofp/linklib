import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  toggleDarkTheme,
  toggleDrawer,
  dialogAction
} from "../../actions/appStateAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

const ListItemComponent = props => {
  const { darkTheme } = props.appState;
  const { isAuthenticated, toggle } = props;
  let modelType;
  if (props.text === "Sign in") {
    modelType = "signInDialogOpen";
  } 
  if(props.text === "Sign up") {
    modelType = "signUpDialogOpen";
  }

  if(isAuthenticated && (props.text === "Sign in" || props.text === "Sign up")) {
    return null
  }
  const toggleDrawerWithDispatch = modelType => {
    if(props.toggle) {
      return props.toggleDarkTheme()
    } 
    props.toggleDrawer(false);
    props.dialogAction(modelType, true);
  };
  return (
    <ListItem
      button
      component={props.component}
      onClick={() => toggleDrawerWithDispatch(modelType)}
      to={props.to}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
      {props.toggle ? (
        <ListItemSecondaryAction>
          <Switch
            color="default"
            onChange={() => props.toggleDarkTheme()}
            checked={darkTheme}
          />
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
};

ListItemComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired,
  toggleDarkThemeAndDrawer: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { toggleDrawer, toggleDarkTheme, dialogAction, toggleDarkThemeAndDrawer }
)(ListItemComponent);
