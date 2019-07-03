import React, { Component } from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import A from "../../Button/A";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import { ReceviedLinkContainer, ReceviedLinkItem } from "../styles";
import { truncateStringTo } from "../../../functions/helper";
import { getIncomingLinks, sentLinkToUserAccount, rejectLinkRecevieJob } from "../../../actions/linkAction";

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
          <div className="col-md-10 mx-auto">
          
            <ReceviedLinkContainer>
              {links.incomingLinks.map((link,i) => {
                return <ReceviedLinkItem key={i}>
                  <div>
                    <strong>{link.linkID.linkTitle}</strong>
                    <p>{truncateStringTo(link.linkID.url, 80)}</p>
                    <A href={link.linkID.url}>
                      <Button
                        aria-label="Open link"
                        color="secondary"
                        variant="outlined"
                        size="medium"
                      >
                        <AddToHomeScreenRounded
                          style={{ marginRight: 5, fontSize: 16 }}
                        />
                        Open link
                      </Button>
                    </A>
                  </div>

                  <div>
                    <small className="my-2">From {link.fromUsername}</small><br />   
                    <IconButton color="primary" onClick={() => this.acceptLink(link)}>
                      <FontAwesomeIcon icon={faVoteYea} />
                      <h6>Accept</h6>
                    </IconButton>
                    <IconButton color="secondary" onClick={() => this.rejectLink(link)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                      <h6>Remove Request</h6>
                    </IconButton>
                  </div>
                      
                </ReceviedLinkItem>
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