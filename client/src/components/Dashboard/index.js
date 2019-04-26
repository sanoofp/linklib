import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";
import LoadableLoader from "../Loader/LoadableLoader";
import { getUserLink } from "../../actions/linkAction";
import { clipboardState } from "../../actions/appStateAction";
import { clearErrors } from "../../actions/errorAction";
import { DashboardContainer } from "./styles";
import Search from "./Search/Search";
import getClipboard from "../../functions/clipboard";
import ScrollToTop from "./ScrollToTop";

const ShowLinks = Loadable({
  loader: () => import("./Show/Show"),
  loading: LoadableLoader
});

const AddLink = Loadable({
  loader: () => import("./Add/Add"),
  loading: LoadableLoader
});

const EditLinkModel = Loadable({
  loader: () => import("../Dialogs/EditLink/EditLink"),
  loading: LoadableLoader
});

const AddLinkMessage = Loadable({
  loader: () => import("./Add/AddLinkMessage"),
  loading: LoadableLoader
});

class Dashboard extends Component {

  componentDidMount() {
    const { clearErrors, error, link, auth, getUserLink } = this.props;

    if(error.id !== null) {
      clearErrors();
    }

    // Throws Warning - "render" should be pure function of props and state
    if(link.userLinks.length === 0 && link.linkLoading === false && link.userLinksLoaded === false && auth.user !== null) {
      getUserLink();
    }

    getClipboard(url => this.props.clipboardState(true, url));
  }

  render() {
    const { auth, link, getUserLink } = this.props;

    window.onfocus = e => getClipboard(url => this.props.clipboardState(true, url));

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

          <ScrollToTop />
          
          <Search />
          <ShowLinks />
          <AddLink />
          {Object.keys(link.editLink).length > 0 && <EditLinkModel /> }

          <AddLinkMessage />

        </DashboardContainer>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getUserLink: PropTypes.func.isRequired,
  clipboardState: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  link: state.linkReducer,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  { getUserLink, clipboardState, clearErrors }
)(Dashboard);
