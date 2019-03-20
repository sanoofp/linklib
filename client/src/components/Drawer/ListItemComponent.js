import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleDrawer } from "../../actions/appStateAction";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemComponent = props => {
  return <ListItem button component={Link} onClick={() => props.toggleDrawer(false)} to={props.to}>
    <ListItemIcon>
      {props.icon}
    </ListItemIcon>
    <ListItemText primary={props.text} />
  </ListItem>
}

ListItemComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { toggleDrawer })(ListItemComponent);