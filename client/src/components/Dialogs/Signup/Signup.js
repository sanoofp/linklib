import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dialogAction } from "../../../actions/appStateAction";
import ModelContainer from './ModelContainer';

const SignupModel = props => {
  return (
    <Modal BackdropProps={{transitionDuration: 500}} open={props.appState.signUpDialogOpen} onClose={() => props.dialogAction("signUpDialogOpen", false)}>
      <ModelContainer />
    </Modal>
  )
}

SignupModel.propTypes = {
  appState:  PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { dialogAction })(SignupModel);