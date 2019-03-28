import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer } from "./styles";
import Spinner2 from "../Loader/Spinner2";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
import Popover from "@material-ui/core/Popover";

class SingleLink extends Component {
  state = {
    anchorEl: null,
    copied: false
  };

  componentDidMount() {
    this.props.getSingleLink(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSingleLink();
  }

  copy = (url, e) => {
    navigator.clipboard
      .writeText(url)
      .then(
        () => this.setState({ copied: true, anchorEl: e.currentTarget }),
        () => this.setState({ copied: false, anchorEl: null })
      );
  };

  render() {
    const { singleLink } = this.props.linkReducer;
    const { copied, anchorEl } = this.state;

    return (
      <React.Fragment>
        <Spinner2 />
        <div className="container my-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <SingleLinkContainer>
                <h1>{singleLink.linkTitle}</h1>
                <p id="copy-link">{singleLink.url}</p>
                <div>
                  <A href={singleLink.url}>Open Link</A>
                  <input
                    type="button"
                    value="Copy link"
                    onClick={e => this.copy(singleLink.url, e)}
                  />
                  <Popover 
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    onClose={() => this.setState({ copied: false, anchorEl: null })}
                    open={copied} 
                    anchorEl={anchorEl}>
                    <h4 style={{ padding: "5px 13px" }}>
                      Link Copied to clipboard
                    </h4>
                  </Popover>
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
