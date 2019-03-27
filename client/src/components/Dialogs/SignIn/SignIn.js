import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signinUser } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorAction";
import { dialogAction, snackbarToggle } from "../../../actions/appStateAction";
import ModelContainer from "./ModelContainer";

class SigninModel extends Component {

  state = {
    username: "",
    password: ""
  }

  handleOnChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }; 
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.signinUser(this.state);
  }

  render() {
    const { appState, dialogAction, clearErrors } = this.props;

    return (
      <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 300 }}
        open={appState.signInDialogOpen}
        onClose={() => {
          clearErrors()
          dialogAction("signInDialogOpen", false)
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

SigninModel.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { dialogAction, signinUser, clearErrors, snackbarToggle }
)(SigninModel);
