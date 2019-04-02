import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
import LoadableLoader from "../Loader/LoadableLoader";
import { getUserLink } from "../../actions/linkAction";
import { DashboardContainer } from "./styles";
import AddLink from "./Add/Add";
import ShowLinks from './Show/Show';

class Dashboard extends Component {
  componentDidMount() {
    const { auth, link } = this.props;
    if(auth.isAuthenticated) {
      if(link.userLinks.length === 0) {
        this.props.getUserLink();
      }
    }
  }

  render() {
    const { auth } = this.props;
    
    if (auth.isLoading) {
      return <LoadableLoader />;
    }
    if(!auth.isAuthenticated) {
      return <Redirect to="/"/>
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Linklib - {auth.user.username}</title>
        </Helmet>
        <DashboardContainer>
          <AddLink />
          <ShowLinks />
        </DashboardContainer>
      </React.Fragment>
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
