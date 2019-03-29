import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer } from "./styles";
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
    setTimeout(() => this.setState({ copied: false }), 5000)
    ));
          
  };

  render() {
    const { singleLink } = this.props.linkReducer;
    const { copied } = this.state;
    return (
      <React.Fragment>
        <Spinner2 />
        <div className="container my-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <SingleLinkContainer>
                <h1>{singleLink.linkTitle}</h1>
                <div className="copy-link-msg position-relative">
                  <input
                    type="text"
                    id="copy-link"
                    readOnly
                    value={singleLink.url ? singleLink.url : ""}
                  />
                  {copied && <p>Copied</p>}
                
                </div>
                <div>
                  <A href={singleLink.url}>Open Link</A>
                  <input
                    type="button"
                    value="Copy link"
                    onClick={() => this.copy()}
                  />
                </div>
                <ShareContainer>
                  <h2>SHARE LINK</h2>
                  <FontAwesomeIconSet />
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
  getSingleLink: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  linkReducer: state.linkReducer
});

export default connect(
  mapStateToProps,
  { getSingleLink, clearSingleLink }
)(SingleLink);
