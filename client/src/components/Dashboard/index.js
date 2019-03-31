import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import LoadableLoader from "../Loader/LoadableLoader";
import { getUserLink } from "../../actions/linkAction";
import { DashboardContainer } from "./styles";
import AddLink from "./Add/Add";
import ShowLinks from './Show/Show';

class Dashboard extends Component {

  render() {
    if(this.props.auth.isAuthenticated && this.props.link.userLinks.length === 0) {
      this.props.getUserLink();
    }
    const { auth } = this.props;
    if (auth.isLoading) {
      return <LoadableLoader />;
    }
    if(!auth.isAuthenticated) {
      return <Redirect to="/"/>
    }

    return (
      <DashboardContainer>
        <AddLink />
        <ShowLinks />
      </DashboardContainer>
    );
  }
}

Dashboard.propTypes = {
  getUserLink: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  link: state.linkReducer
});

export default connect(
  mapStateToProps,
  { getUserLink }
)(Dashboard);
