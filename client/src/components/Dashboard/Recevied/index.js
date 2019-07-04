import React, { Component } from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { ReceviedLinkContainer } from "../styles";
import { getIncomingLinks, sentLinkToUserAccount, rejectLinkRecevieJob } from "../../../actions/linkAction";
import ReceviedLink from "./ReceviedLink";
import ReceviedLinkEmpty from "./ReceviedLinkEmpty";

class Recevied extends Component {

  componentDidMount() {
    const { auth, getIncomingLinks } = this.props;
    if(auth.isAuthenticated) {
      getIncomingLinks(auth.user._id);
    }
  }

  acceptLink = link => {
    const { auth, sentLinkToUserAccount } = this.props;
    sentLinkToUserAccount(link.linkID, auth.user._id, link._id);
  }

  rejectLink = link => {
    const { rejectLinkRecevieJob } = this.props;
    rejectLinkRecevieJob(link._id)
  }

  render() {
    const { auth, links } = this.props;
    if (!auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
          
            <ReceviedLinkContainer>
              {links.incomingLinks.length === 0 && <ReceviedLinkEmpty />}

              {links.incomingLinks.map((link,i) => {
                return <ReceviedLink link={link} key={i} acceptLink={link => this.acceptLink(link)} rejectLink={link => this.rejectLink(link)} />
              })}
              
            </ReceviedLinkContainer>
          
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
  links: state.linkReducer
});

export default connect(mapStateToProps, { getIncomingLinks, sentLinkToUserAccount, rejectLinkRecevieJob })(Recevied);