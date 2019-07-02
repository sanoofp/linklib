import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../../../actions/errorAction";
import { dialogAction } from "../../../actions/appStateAction";
import { searchLLUsername, sentLinkToUser } from "../../../actions/linkAction";
import { ModelContainerStyled } from "../style";
import Confirm from "./Confirm";
import SentLinkMainView from "./SentLinkMainView";

class SentLink extends Component {
  state = {
    username: "",
    confirm: false,
    toUser: {},
  }

  searchUsername = () => {
    const { username } = this.state;
    this.props.searchLLUsername(username);
  }
  confirmSent = (toUser) => this.setState({ confirm: true, toUser: toUser })
  cancelConfirmation = () => this.setState({ confirm: false, toUser: {} });

  sentToUser = toUserId => {
    this.props.sentLinkToUser(toUserId);
  }

  render() {
    const { confirm, toUser } = this.state
    const { dialogAction, appState, link } = this.props;
    const users = link.sentLink.users;

    return (
      <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 300 }}
        open={appState.sentLinkDialogOpen}
        onClose={() => {
          clearErrors();
          dialogAction("sentLinkDialogOpen", false);
        }}
      >
        <ModelContainerStyled tabIndex={1}>
          <div className="container">
            <div className="row">

              <div className="co-md-10 mx-auto">
                {confirm ?
                  <Confirm sendConfirm={link.linkSend} toUser={toUser} sendToUser={toUserId => this.sentToUser(toUserId)} cancelConfirmation={() => this.cancelConfirmation()} />
                :
                  <SentLinkMainView handleOnChange={val => this.setState({ username: val })} users={users} searchUsername={this.searchUsername}  confirmSent={(user) => this.confirmSent(user)} />
                }
              </div>     
            </div>
          </div>
        </ModelContainerStyled>
      </Modal>
    )
  }
}

SentLink.propTypes = {
  appState: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  link: state.linkReducer
})

export default connect(mapStateToProps, { dialogAction, searchLLUsername, sentLinkToUser })(SentLink)