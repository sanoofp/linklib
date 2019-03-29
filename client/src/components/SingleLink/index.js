import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer } from "./styles";
import Spinner2 from "../Loader/Spinner2";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
import select from "select";

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

  copy = (url, e) => {
    // navigator.clipboard
      // .writeText(url)
      // .then(
        // () => this.setState({ copied: true, anchorEl: e.currentTarget }),
        // () => this.setState({ copied: false, anchorEl: null })
      // );
    select(document.getElementById("copy-link"));
    let _OK;
    try {
      _OK = document.execCommand("copy");
    } catch(err) {
      _OK = false;
    }
    console.log(_OK);
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
                <input type="text" id="copy-link" readOnly value={singleLink.url} />
                <div>
                  <A href={singleLink.url}>Open Link</A>
                  <input
                    type="button"
                    value="Copy link"
                    onClick={e => this.copy(singleLink.url, e)}
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
