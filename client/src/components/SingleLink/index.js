import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { snackbarToggle } from "../../actions/appStateAction";
import { getSingleLink, clearSingleLink } from "../../actions/linkAction";
import { SingleLinkContainer, ShareContainer, CopiedMsg } from "./styles";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
import copy from "../../functions/copy";
import androidShare from "../../functions/androidShare";
import MenuComponent from "../Menu/MenuComponent";
import IconButton from '@material-ui/core/IconButton';
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";


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
    const { copied } = this.state;
    const { id } = this.props.errorReducer;
    let userOfLink = false;
    let avatar = "", username = "";

    if(user && singleLink._id) {
      avatar = singleLink.userID.avatar;
      username = singleLink.userID.username;
      if(user._id === singleLink.userID._id) {
        userOfLink = true;
      }
    }

    if(id === "SINGLE_LINK_ERR" || id === "SINGLE_LINK_DELETED") {
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
                    ll={this.share}
                  />
                </ShareContainer>

                { userOfLink ?
                  <MenuComponent link={singleLink} />
                  : null
                }

              </SingleLinkContainer>

              <SingleLinkContainer>
                <h2>Details of link</h2>
  
                <div className="details">
                  <span>Uploaded by <Chip
                      avatar={<Avatar src={avatar} />}
                      label={username}
                      color="default"
                      variant="outlined"
                    />
                  </span>
                </div>
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
