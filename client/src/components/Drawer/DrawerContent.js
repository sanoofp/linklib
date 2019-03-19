import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../actions/settingsAction';
import PropTypes from 'prop-types';
import HomeRounded from '@material-ui/icons/HomeRounded';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import PermIdentityRounded from '@material-ui/icons/PermIdentityRounded';
import WbIncandescentRounded from '@material-ui/icons/WbIncandescentRounded';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import ListSubheader from '@material-ui/core/ListSubheader';

const menu = [
  { text: "Home", to: "/", icon: <HomeRounded /> },
  { text: "Sign in", to: "/", icon: <PermIdentityRounded /> },
  { text: "Sign up", to: "/" , icon: <AccountCircleRounded />},
]

const ListItemLink = props => {
  return <ListItem button component={Link} {...props} />
}

const DrawerList = props => {
  return <List component="nav">
    <ListItemLink to={props.to} onClick={() => props.handleOnClick(false)}>

      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    
    </ListItemLink>
  </List>
}

class DrawerContent extends Component {
  
  handleToggle = () => {
    this.props.toggleDarkTheme()
  }

  render() {
    const { darkTheme } = this.props.settings;
    return <React.Fragment>

      <List component="nav">
        <ListItemLink to={menu[0].to} onClick={this.props.handleOnClick}>

          <ListItemIcon>
            {menu[0].icon}
          </ListItemIcon>
          <ListItemText primary={menu[0].text} />
        
        </ListItemLink>
      </List>
      <List component="nav">
        <ListItemLink to={menu[1].to} onClick={this.props.handleOnClick}>

          <ListItemIcon>
            {menu[1].icon}
          </ListItemIcon>
          <ListItemText primary={menu[1].text} />
        
        </ListItemLink>
      </List>
      <List component="nav">
        <ListItemLink to={menu[2].to} onClick={this.props.handleOnClick}>

          <ListItemIcon>
            {menu[2].icon}
          </ListItemIcon>
          <ListItemText primary={menu[2].text} />
        
        </ListItemLink>
      </List>

      <Divider />

      <List subheader={<ListSubheader>Settings</ListSubheader>}>
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
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  settings: state.settingsReducer
});

export default connect(mapStateToProps, { toggleDarkTheme })(DrawerContent);