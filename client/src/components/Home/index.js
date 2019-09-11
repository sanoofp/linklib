import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { dialogAction } from "../../actions/appStateAction";
import { withStyles } from "@material-ui/core/styles";
import { HomeContainer, MuiButtonStyles } from "./style";
import Intro from "./Intro";
import GlobalSearch from "./Search/GlobalSearch";
import Contribute from "./Contribute";

class Home extends Component {
  render() {
    const { isAuthenticated, dialogAction, darkTheme } = this.props;

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
        <Contribute darkTheme={darkTheme} />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  dialogAction: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  darkTheme: state.appStateReducer.darkTheme
});

export default connect(
  mapStateToProps,
  { dialogAction }
)(withStyles(MuiButtonStyles)(Home));
