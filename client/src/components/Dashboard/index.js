import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
import { listenSocket } from "../../functions/notification";

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
      console.log("Listening on socket");
      listenSocket(auth.user._id);
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
