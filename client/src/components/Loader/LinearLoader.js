import React from "react";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import green from "@material-ui/core/colors/green";

const LinearLoader = props => {
  const { isLoading } = props.auth;
  return (
    isLoading && (
      <LinearProgress
        style={{
          backgroundColor: green["800"],
          zIndex: 1000,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%"
        }}
      />
    )
  );
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(LinearLoader);
