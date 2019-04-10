import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { snackbarToggle } from "../../actions/appStateAction";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer, CopiedMsg } from "./styles";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
import copy from "../../functions/copy";

class SingleLink extends Component {
  state = {
    copied: false
  };

  componentDidMount() {
    this.props.getSingleLink(this.props.match.params.id)
  }

  _timeout = () => this.setState({ copied: false })

  componentWillUnmount() {
    this.props.clearSingleLink();
    clearTimeout(this._timeout);
  }

  copyLink = () => {
    copy("copy-link", () =>
      this.setState({ copied: true }, () => setTimeout(this._timeout, 800))
    );
  };

  androidShare = () => {
    const { singleLink } = this.props.linkReducer;
    if (navigator.share) {
      navigator
        .share({
          title: singleLink.linkTitle,
          text: "Linklib",
          url: singleLink.url
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    } else {
      this.props.snackbarToggle(true, "Web Share API not Supported", "error");
    }
  };

  render() {
    const { singleLink } = this.props.linkReducer;
    const { copied } = this.state;
    const { id } = this.props.errorReducer;
    if(id === "SINGLE_LINK_ERR") {
      return <Redirect to="/dashboard" />
    } 
    return (
      <React.Fragment>
        <Helmet>
          <title>{`Linklib - ${
            singleLink.linkTitle ? singleLink.linkTitle : ""
          }`}</title>
        </Helmet>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <SingleLinkContainer>
                <h1>{singleLink.linkTitle}</h1>
                <div>
                  <input
                    type="text"
                    id="copy-link"
                    readOnly
                    value={singleLink.url ? singleLink.url : ""}
                  />
                  <CopiedMsg copied={copied}>
                    <p>Copied to clipboard</p>
                  </CopiedMsg>
                </div>
                <div>
                  <A className="links-btn" href={singleLink.url}>
                    Open Link
                  </A>
                  <input
                    className="links-btn"
                    type="button"
                    value="Copy link"
                    onClick={() => this.copyLink()}
                  />
                </div>
                <ShareContainer>
                  <h2>SHARE LINK</h2>
                  <FontAwesomeIconSet
                    title={singleLink.linkTitle}
                    link={singleLink.url}
                    ll={this.androidShare}
                  />
                </ShareContainer>
              </SingleLinkContainer>
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
  errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  linkReducer: state.linkReducer,
  errorReducer: state.errorReducer
});

export default connect(
  mapStateToProps,
  { getSingleLink, clearSingleLink, snackbarToggle }
)(SingleLink);
