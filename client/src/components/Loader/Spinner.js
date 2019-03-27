import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';

const SpinnerContainer = styled.div`
  z-index: 1400;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

const Spinner = props => {
  const { reqLoading } = props.appState;
  return reqLoading && <SpinnerContainer>
    <CircularProgress />
  </SpinnerContainer>
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
})

export default connect(mapStateToProps)(Spinner) 