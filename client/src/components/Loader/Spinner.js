import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SpinnerContainer } from "./styles";

const Spinner = props => {
  const { reqLoading } = props.appState;
  const { linkLoading, searchLinkLoading } = props.linkReducer;
  return (
    (reqLoading || linkLoading || searchLinkLoading) && (
      <SpinnerContainer reqLoading={reqLoading || searchLinkLoading}>
        <CircularProgress
          size={60}
          thickness={4}
          color="primary"
          variant="indeterminate"
        />
      </SpinnerContainer>
    )
  );
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  linkReducer: state.linkReducer
});

export default connect(mapStateToProps)(Spinner);
