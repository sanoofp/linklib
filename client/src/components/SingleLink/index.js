import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { snackbarToggle } from "../../actions/appStateAction";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import copy from "../../functions/copy";
import androidShare from "../../functions/androidShare";
import LoadableLoader from '../Loader/LoadableLoader';
import Loadable from "react-loadable";

const SingleLinkMain = Loadable({
  loader: () => import("./SingleLinkMain"),
  loading: LoadableLoader
});

const Details = Loadable({
  loader: () => import("./Details"),
  loading: LoadableLoader
});


class SingleLink extends Component {
  state = {
    copied: false
  };
  
  _timeout = () => this.setState({ copied: false })

  componentDidMount() {
    this.props.getSingleLink(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearSingleLink();
    clearTimeout(this._timeout);
  }

  copyLink = () => {
    copy("copy-link", () =>
      this.setState({ copied: true }, () => setTimeout(this._timeout, 800))
    );
  };

  share = () => {
    const { singleLink } = this.props.linkReducer;
    androidShare(singleLink, () => this.props.snackbarToggle(true, "Web Share API not Supported", "error"));
  };

  render() {
    const { singleLink } = this.props.linkReducer;
    const { user } = this.props.authReducer;
    const { id } = this.props.errorReducer;
    const { copied } = this.state;

    let userOfLink = false;
    let avatar = "", username = "";

    if(singleLink._id) {
      avatar = singleLink.userID.avatar;
      username = singleLink.userID.username;
      if(user) {
        if(user._id === singleLink.userID._id) {
          userOfLink = true;
        }
      }
    }

    if(id === "SINGLE_LINK_ERR") {
      return <Redirect to="/dashboard" />
    } 
    return (
      <React.Fragment>
        <Helmet>
          <title>{`Linklib ${
            singleLink.linkTitle ? `- ${singleLink.linkTitle}` : ""
          }`}</title>
        </Helmet>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              
              <SingleLinkMain singleLink={singleLink} copied={copied} userOfLink={userOfLink} copyLink={() => this.copyLink()} />
              <Details singleLink={singleLink} avatar={avatar} username={username} share={() => this.share()} />

             </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SingleLink.propTypes = {
  getSingleLink: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired,
  errorReducer: PropTypes.object.isRequired,
  authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  linkReducer: state.linkReducer,
  errorReducer: state.errorReducer,
  authReducer: state.authReducer,
});

export default connect(
  mapStateToProps,
  { getSingleLink, clearSingleLink, snackbarToggle }
)(SingleLink);
