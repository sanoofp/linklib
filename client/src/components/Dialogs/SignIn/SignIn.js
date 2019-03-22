import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dialogAction } from "../../../actions/appStateAction";
import ModelContainer from './ModelContainer';

const SigninModel = props => {
  return (
    <Modal open={props.appState.signInDialogOpen} onClose={() => props.dialogAction("signInDialogOpen", false)}>
      <ModelContainer />
    </Modal>
  )
}

SigninModel.propTypes = {
  appState:  PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { dialogAction })(SigninModel);