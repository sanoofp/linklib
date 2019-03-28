import React from "react";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer } from "./styles";

const Spinner = props => {
  const { reqLoading } = props.appState;
  return (reqLoading) && <SpinnerContainer>
    <CircularProgress size={60} thickness={8} color="primary" variant="indeterminate" />
  </SpinnerContainer>
}

const mapStateToProps = state => ({
  appState: state.appStateReducer,
})

export default connect(mapStateToProps)(Spinner) 