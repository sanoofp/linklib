import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDarkTheme } from '../../../actions/appStateAction'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WbIncandescentRounded from "@material-ui/icons/WbIncandescentRounded";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

const DrawerSettings = props => <List subheader={<ListSubheader>Theme</ListSubheader>}>
  <ListItem
      button
      component={props.component}
      onClick={() => props.toggleDarkTheme()}
    >
      <ListItemIcon>
        <WbIncandescentRounded />
      </ListItemIcon>
      <ListItemText primary="Dark theme" />
    <ListItemSecondaryAction>
      <Switch
        color="default"
        onChange={() => props.toggleDarkTheme()}
        checked={props.darkTheme}
        />
    </ListItemSecondaryAction>
  </ListItem>
</List>

DrawerSettings.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  darkTheme: state.appStateReducer.darkTheme
});

export default connect(mapStateToProps, { toggleDarkTheme })(DrawerSettings);