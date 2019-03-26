import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dialogAction } from "../../../actions/appStateAction";
import { signupUser } from "../../../actions/authActions";
import ModelContainer from "./ModelContainer";

class SignupModel extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleOnChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    if(!username || !email || !password) {
      this.setState({
        usernameEmpty: !username.length
      })
    }
    console.log(this.state);
    this.props.signupUser(this.state);
  };

  render() {
    const { appState, dialogAction } = this.props;
    return (
      <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 400 }}
        open={appState.signUpDialogOpen}
        onClose={() => dialogAction("signUpDialogOpen", false)}
      >
        <ModelContainer
          handleSubmit={this.handleSubmit}
          onChange={(name, value) => this.handleOnChange(name, value)}
        />
      </Modal>
    );
  }
}

SignupModel.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  { dialogAction, signupUser }
)(SignupModel);
