import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { dialogAction } from "../../actions/appStateAction";
import { withStyles } from "@material-ui/core/styles";
import { HomeContainer, MuiButtonStyles } from "./style";
import LoadableLoader from "../Loader/LoadableLoader";
import Loadable from "react-loadable";
import Intro from "./Intro";

// const Intro = Loadable({
//   loader: () => import("./Intro"),
//   loading: LoadableLoader
// });

const GlobalSearch = Loadable({
  loader: () => import("./Search/GlobalSearch"),
  loading: LoadableLoader
});

class Home extends Component {
  render() {
    const { isAuthenticated, dialogAction } = this.props;

    return (
      <HomeContainer>
        <Helmet>
          <title>{`Linklib - Home`}</title>
        </Helmet>
        <Intro
          isAuthenticated={isAuthenticated}
          dialogAction={(type, isOpen) => dialogAction(type, isOpen)}
        />
        <GlobalSearch />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  dialogAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { dialogAction }
)(withStyles(MuiButtonStyles)(Home));
