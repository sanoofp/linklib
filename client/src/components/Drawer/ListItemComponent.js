import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawer } from "../../actions/appStateAction";
import { toggleDarkTheme } from "../../actions/settingsAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

const ListItemComponent = props => {
  const { darkTheme } = props.settings;
  return (
    <ListItem
      button
      component={props.component}
      onClick={() => {
        props.toggle ? props.toggleDarkTheme() : props.toggleDrawer(false);
      }}
      to={props.to}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
      {props.toggle ? (
        <ListItemSecondaryAction>
          <Switch
            color="primary"
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
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.settingsReducer,
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer, toggleDarkTheme }
)(ListItemComponent);
