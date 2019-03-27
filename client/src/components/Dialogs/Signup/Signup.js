import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dialogAction, snackbarToggle } from "../../../actions/appStateAction";
import { signupUser } from "../../../actions/authActions";
import { clearErrors } from '../../../actions/errorAction'
import ModelContainer from "./ModelContainer";

class SignupModel extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    validate: false
  };

  handleOnChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ validate: true })
    const { username, email, password } = this.state;

    if(username.length !== 0 && email.length !== 0 && password.length !== 0) {
      // Signup User action
      this.props.signupUser(this.state);
    } else {
      this.props.snackbarToggle(true, "Please fill complete field's.", "error")
    }
  };

  render() {
    const { validate, username, password, email } = this.state;
    const { appState, dialogAction, clearErrors } = this.props;
    const validateEmpty = validate ? { 
      email: email.length === 0,
      username: username.length === 0,
      password: password.length === 0
     } : {};

    return <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 400 }}
        open={appState.signUpDialogOpen}
        onClose={() => {
          clearErrors()
          dialogAction("signUpDialogOpen", false)
          this.setState({ username: "", password: "", email: "", validate: false })
        }}
    >
      <ModelContainer
        emptyField={validateEmpty}
        handleSubmit={this.handleSubmit}
        onChange={(name, value) => this.handleOnChange(name, value)}
      />
    </Modal>
  }
}

SignupModel.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  signupUser: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  { dialogAction, signupUser, snackbarToggle, clearErrors }
)(SignupModel);
