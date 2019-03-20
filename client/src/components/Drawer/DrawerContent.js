import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../actions/settingsAction';
import PropTypes from 'prop-types';
import WbIncandescentRounded from '@material-ui/icons/WbIncandescentRounded';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItems from './ListItems';

class DrawerContent extends Component {
  
  handleToggle = () => {
    this.props.toggleDarkTheme()
  }

  render() {
    const { darkTheme } = this.props.settings;
    return <React.Fragment>

      <ListItems />

      <Divider />

      <List subheader={<ListSubheader>More</ListSubheader>}>
        <ListItem button onClick={() => this.handleToggle()}>
          <ListItemIcon>
            <WbIncandescentRounded/>
          </ListItemIcon>
          <ListItemText primary="Dark Theme" />
          <ListItemSecondaryAction>
            <Switch
              color="primary"
              onChange={() => this.handleToggle()}
              checked={darkTheme}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List> 
   
    </React.Fragment>
  }
}

DrawerContent.propTypes = {
  toggleDarkTheme: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  settings: state.settingsReducer,
});

export default connect(mapStateToProps, { toggleDarkTheme })(DrawerContent);