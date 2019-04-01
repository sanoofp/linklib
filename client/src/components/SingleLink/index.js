import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { snackbarToggle } from "../../actions/appStateAction";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer, CopiedMsg } from "./styles";
import Spinner2 from "../Loader/Spinner2";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
import copy from "../../functions/copy";

class SingleLink extends Component {
  state = {
    copied: false
  };

  componentDidMount() {
    this.props.getSingleLink(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSingleLink();
  }

  copy = () => {
    copy("copy-link", () => this.setState({ copied: true }, () =>
    setTimeout(() => this.setState({ copied: false }), 4000)
    ));      
  };

  androidShare = () => {
    console.log("AND");
    const { singleLink } = this.props.linkReducer;    
    if (navigator.share) {
      navigator.share({
          title: singleLink.linkTitle,
          text: "Linklib - share",
          url: singleLink.url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  render() {
    const { singleLink } = this.props.linkReducer;
    const { copied } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>{`Linklib - ${singleLink.linkTitle ? singleLink.linkTitle : ""}`}</title>
        </Helmet>
        <Spinner2 />
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
                  <CopiedMsg copied={copied}><p>Copied to clipboard</p></CopiedMsg>
                </div>
                <div>
                  <A className="links-btn" href={singleLink.url}>Open Link</A>
                  <input
                    className="links-btn"
                    type="button"
                    value="Copy link"
                    onClick={() => this.copy()}
                  />
                </div>
                <ShareContainer>
                  <h2>SHARE LINK</h2>
                  <FontAwesomeIconSet title={singleLink.linkTitle} link={singleLink.url} ll={this.androidShare} />
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
  snackbarToggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  linkReducer: state.linkReducer
});

export default connect(
  mapStateToProps,
  { getSingleLink, clearSingleLink, snackbarToggle }
)(SingleLink);
