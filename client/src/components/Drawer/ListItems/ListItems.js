import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dialogAction, toggleDrawer } from "../../../actions/appStateAction";
import { signOut } from "../../../actions/authAction";
import List from "@material-ui/core/List";
import HomeRounded from "@material-ui/icons/HomeRounded";
import PersonAddRounded from "@material-ui/icons/PersonAddRounded";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import FlagRounded from "@material-ui/icons/FlagRounded";
import PollRounded from "@material-ui/icons/PollRounded";
import EventBusyRounded from "@material-ui/icons/EventBusyRounded";
import Avatar from "@material-ui/core/Avatar";
import ListItemComponent from "./ListItemComponent";

const ListItems = props => {
  const { isAuthenticated, dialogAction, toggleDrawer, signOut, user } = props;
  let menu = [
    {
      text: "Home",
      to: "/",
      Link: Link,
      onClick: () => toggleDrawer(false),
      icon: <HomeRounded />
    }
  ];
  isAuthenticated
    ? // User links
      (menu = [
        {
          text: user.username,
          icon: <Avatar src={user.avatar} />
        },
        {
          text: "Dashboard",
          to: "/dashboard",
          Link: Link,
          onClick: () => toggleDrawer(false),
          icon: <DashboardRounded />
        },
        {
          text: "Logout",
          onClick: () => {
            signOut();
            toggleDrawer(false);
          },
          icon: <EventBusyRounded />
        }
      ])
    : // Guest Links
      menu.push(
        {
          text: "Sign in",
          onClick: () => {
            dialogAction("signInDialogOpen", true);
            toggleDrawer(false);
          },
          icon: <ExitToAppRounded />
        },
        {
          text: "Sign up",
          onClick: () => {
            dialogAction("signUpDialogOpen", true);
            toggleDrawer(false);
          },
          icon: <PersonAddRounded />
        }
      );

  menu.push(
    {
      text: "privacy Policy",
      to: "/privacypolicy",
      Link: Link,
      onClick: () => toggleDrawer(false),
      icon: <PollRounded />
    },
    {
      text: "Terms",
      to: "/termsandconditions",
      Link: Link,
      onClick: () => toggleDrawer(false),
      icon: <FlagRounded />
    }
  );

  return (
    <List component="nav">
      {menu.map((item, index) => {
        return (
          <ListItemComponent
            key={index}
            component={item.Link ? item.Link : null}
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
  user: PropTypes.object
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { dialogAction, toggleDrawer, signOut }
)(ListItems);
