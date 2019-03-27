import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dialogAction, toggleDrawer } from "../../actions/appStateAction";
import { signOut } from "../../actions/authActions";
import List from "@material-ui/core/List";
import HomeRounded from "@material-ui/icons/HomeRounded";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import PermIdentityRounded from "@material-ui/icons/PermIdentityRounded";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import EventBusyRounded from "@material-ui/icons/EventBusyRounded";
import ListItemComponent from "./ListItemComponent";

const ListItems = props => {
  const { isAuthenticated, dialogAction, toggleDrawer, signOut } = props;
  const menu = [{ 
    text: "Home", 
    to: "/",
    onClick: () => toggleDrawer(false), 
    icon: <HomeRounded /> 
  }];
  isAuthenticated
    ? menu.push(
        { 
          text: "Dashboard", 
          to: "/dashboard", 
          onClick: () => toggleDrawer(false), 
          icon: <DashboardRounded /> 
        },
        { text: "Logout", 
          onClick: () => {
            signOut();
            toggleDrawer(false)
          }, 
          icon: <EventBusyRounded /> 
        }
      )
    : menu.push(
        {
          text: "Sign in",
          onClick: () => dialogAction("signInDialogOpen", true),
          icon: <PermIdentityRounded />
        },
        {
          text: "Sign up",
          onClick: () => dialogAction("signUpDialogOpen", true),
          icon: <AccountCircleRounded />
        }
      );

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
            onClick={item.onClick}
          />
        );
      })}
    </List>
  );
};

ListItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dialogAction: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { dialogAction, toggleDrawer, signOut }
)(ListItems);
