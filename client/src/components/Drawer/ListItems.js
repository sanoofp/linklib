import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import HomeRounded from "@material-ui/icons/HomeRounded";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import PermIdentityRounded from "@material-ui/icons/PermIdentityRounded";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import ListItemComponent from "./ListItemComponent";

const ListItems = props => {
  const { isAuthenticated } = props;
  const menu = [
    { text: "Home", to: "/", icon: <HomeRounded /> }
  ];
  isAuthenticated ? 
    menu.push({ text: "Dashboard", to: "/dashboard", icon: <DashboardRounded/> }) 
    :
    menu.push({ text: "Sign in", to: "/", icon: <PermIdentityRounded /> },
    { text: "Sign up", to: "/", icon: <AccountCircleRounded /> });

  return (
    <List component="nav">
      {menu.map((item, index) => {
        return (
          <ListItemComponent
            key={index}
            component={Link}
            to={item.to}
            icon={item.icon}
            text={item.text}
            // itemOnClick={() => props.toggleDrawer(false)}
          />
        );
      })}
    </List>
  );
};

ListItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated  
});

export default connect(mapStateToProps)(ListItems);
