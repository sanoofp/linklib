import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModelContainer from "./ModelContainer";
import { dialogAction, snackbarToggle } from "../../../actions/appStateAction";
import { clearErrors } from "../../../actions/errorAction";
import { addLink } from "../../../actions/linkAction";

class AddLinkModal extends Component {

  state = {
    linkTitle: "",
    url: ""
  }

  handleOnChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }; 
  
  handleSubmit = event => {
    event.preventDefault();
    const { url, linkTitle } = this.state;
    if(url === "" || linkTitle === "") {
      this.props.snackbarToggle(true, "Please Enter complete data", "error");
    } else {
      this.props.addLink(this.state);
    }
  }

  render() {
    const { appState, dialogAction, clearErrors } = this.props;

    return (
      <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 300 }}
        open={appState.addLinkDialogOpen}
        onClose={() => {
          clearErrors()
          dialogAction("addLinkDialogOpen", false)
        }}
      >
        <ModelContainer
          handleSubmit={this.handleSubmit}
          onChange={(name, value) => this.handleOnChange(name, value)}        
        />
      </Modal>
    );
  }
};

AddLinkModal.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired,
  addLink: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
});

export default connect(
  mapStateToProps,
  { dialogAction, snackbarToggle, clearErrors, addLink }
)(AddLinkModal);
