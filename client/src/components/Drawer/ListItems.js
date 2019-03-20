import React from 'react';
import List from '@material-ui/core/List';
import HomeRounded from '@material-ui/icons/HomeRounded';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import PermIdentityRounded from '@material-ui/icons/PermIdentityRounded';
import ListItemComponent from './ListItemComponent';

const menu = [
  { text: "Home", to: "/", icon: <HomeRounded /> },
  { text: "Sign in", to: "/", icon: <PermIdentityRounded /> },
  { text: "Sign up", to: "/" , icon: <AccountCircleRounded />},
];

const ListItems = props => {
  return <List component="nav">
    {menu.map((item, index) => {
      return <ListItemComponent key={index} to={item.to} icon={item.icon} text={item.text} />
    })}
  </List>
}

export default ListItems;