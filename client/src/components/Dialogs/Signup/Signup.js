import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dialogAction } from "../../../actions/appStateAction";
import ModelContainer from './ModelContainer';

class SignupModel extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleOnChange = (name,value) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { appState, dialogAction } = this.props;
    return (
      <Modal BackdropProps={{transitionDuration: 300}} open={appState.signUpDialogOpen} onClose={() => dialogAction("signUpDialogOpen", false)}>
        <ModelContainer handleSubmit={this.handleSubmit} onChange={(name, value) => this.handleOnChange(name, value)} />
      </Modal>
    )
  }
}

SignupModel.propTypes = {
  appState:  PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { dialogAction })(SignupModel);