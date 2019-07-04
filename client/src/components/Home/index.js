import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { dialogAction } from "../../actions/appStateAction";
import { withStyles } from "@material-ui/core/styles";
import { HomeContainer, MuiButtonStyles } from "./style";
import Intro from "./Intro";
import GlobalSearch from "./Search/GlobalSearch";

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
