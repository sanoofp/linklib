import React from "react";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer2 } from "./styles";

const Spinner2 = props => {
  const { linkLoading } = props.linkReducer;
  return (linkLoading) && <SpinnerContainer2>
    <CircularProgress size={60} thickness={8} variant="indeterminate" />
  </SpinnerContainer2>
}

const mapStateToProps = state => ({
  linkReducer: state.linkReducer
})

export default connect(mapStateToProps)(Spinner2) 