import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDarkTheme, toggleDrawer } from "../../actions/appStateAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

const ListItemComponent = props => {
  const { darkTheme } = props.appState;
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
  appState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer, toggleDarkTheme }
)(ListItemComponent);
