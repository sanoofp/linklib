import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import LoadableLoader from "../Loader/LoadableLoader";
import { getUserLink } from "../../actions/linkAction";
import { dialogAction } from "../../actions/appStateAction";
import { DashboardContainer } from "./styles";
import Search from "./Search/Search";
import ShowLinks from "./Show/Show";
import AddLinkModal from "../Dialogs/AddLink/AddLinkModal";
import { validateURL } from "../../functions/helper";

class Dashboard extends Component {
  
  getClipboard = () => {
    if(navigator.clipboard) {
      navigator.clipboard.readText()
      .then(url => {
        const isURL = validateURL(url)
        if(isURL) {
          this.setState({ foundUrlInClipboard: true })
        }
      })
      .catch(err => console.log(err))
    }
  }

  componentDidMount() {
    const { auth, link } = this.props;
    
    this.getClipboard();

    if (auth.isAuthenticated) {
      if (link.userLinks.length === 0 && !link.userLinks.userLinksLoaded) {
        this.props.getUserLink();
      }
    }
  }

  render() {
    const { auth, dialogAction } = this.props;

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

          <Fab
            color="secondary"
            aria-label="Add"
            onClick={() => dialogAction("addLinkDialogOpen", true)}
            style={{ position: "fixed", right: 24, bottom: 20 }}
          >
            <AddIcon />
          </Fab>
          <AddLinkModal />
        </DashboardContainer>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getUserLink: PropTypes.func.isRequired,
  dialogAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  link: state.linkReducer
});

export default connect(
  mapStateToProps,
  { getUserLink, dialogAction }
)(Dashboard);
