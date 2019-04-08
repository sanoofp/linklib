import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";
import LoadableLoader from "../Loader/LoadableLoader";
import { getUserLink } from "../../actions/linkAction";
import { clipboardState } from "../../actions/appStateAction";
import { DashboardContainer } from "./styles";
import Search from "./Search/Search";
// import ShowLinks from "./Show/Show";
import { validateURL } from "../../functions/helper";

const ShowLinks = Loadable({
  loader: () => import("./Show/Show"),
  loading: LoadableLoader
});

const AddLink = Loadable({
  loader: () => import("./Add/Add"),
  loading: LoadableLoader
});

const AddLinkMessage = Loadable({
  loader: () => import("./Add/AddLinkMessage"),
  loading: LoadableLoader
});

class Dashboard extends Component {

  listenSocket = id => {
    const socket = io("/");
    socket.on(`notify-${id}`, data => {
      console.log("EMITTED >>> notify-"+id, data);
      if(Notification.permission !== "denied") {        
        
        
        Notification.requestPermission().then(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            navigator.serviceWorker.getRegistration().then(function(reg) {
              var options = {
                body: data.link.url,
                icon: data.icon,
                badge: data.icon,
                requireInteraction: true,
                actions: [{action: "open", title: "Open Link"}]
              };
              
              reg.showNotification(data.link.linkTitle, options);
            });
            console.log(navigator.serviceWorker);
            navigator.serviceWorker.addEventListener("notificationclick", e => {
              console.log(e);
              window.open(data.link.url, "_blank")
            })
          }
        });


      }
      
    });
  };

  getClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard
        .readText()
        .then(url => {
          const isURL = validateURL(url);
          if (isURL) {
            this.props.clipboardState(true, url);
            return true;
          }
        })
    }
  };

  componentDidMount() {
    const { auth, link } = this.props;

    this.getClipboard();
    if(auth.user) {
      this.listenSocket(auth.user._id);
    }

    if (link.userLinks.length === 0 && !link.userLinks.userLinksLoaded) {
      if (auth.isAuthenticated) {
        this.props.getUserLink();
      }
    }
  }

  render() {
    const { auth } = this.props;

    if (auth.isLoading) {
      return <LoadableLoader />;
    }
    if (!auth.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Linklib - {auth.user.username}</title>
        </Helmet>
        <DashboardContainer>
          <Search />
          <ShowLinks />
          <AddLink />
          <AddLinkMessage />
        </DashboardContainer>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getUserLink: PropTypes.func.isRequired,
  clipboardState: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  link: state.linkReducer
});

export default connect(
  mapStateToProps,
  { getUserLink, clipboardState }
)(Dashboard);
