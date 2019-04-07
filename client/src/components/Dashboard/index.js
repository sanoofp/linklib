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
  state = { data: [] }
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
        .catch(err => console.log(err));
    }
  };

  listenSocket = () => {
    const socket = io("/");
    socket.on("notify", data => {
      this.setState({ data })
      console.log("EMITING FROM SOCKET", data);
      if (Notification.permission === "granted") {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          var options = {
            body: "Here is a notification body!",
            icon: "https://www.gravatar.com/avatar/asdasdasdasd?d=robohash",
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1
            }
          };
          reg.showNotification("Hello world!", options);
        });
      }
    });
  };

  componentDidMount() {
    const { auth, link } = this.props;

    this.getClipboard();
    this.listenSocket();

    if (link.userLinks.length === 0 && !link.userLinks.userLinksLoaded) {
      if (auth.isAuthenticated) {
        this.props.getUserLink();
      }
    }
  }

  render() {
    const { auth } = this.props;
    console.log(this.state.data);
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
