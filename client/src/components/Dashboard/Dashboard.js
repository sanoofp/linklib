import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { Card } from './styles'
import AddLink from "./AddLink";

const Dashboard = (props) => {
  const { auth } = props;
  if(!auth.isAuthenticated) {
    return <Redirect to="/" />
  }
  return auth.user && <div className="container mb-2">
    <div className="row">
      <div className="col-md-8">
      
      </div>
      <div className="col-md-4">
        <Card>
          <img src={auth.user.avatar} alt={auth.user.username}/>
          <h3>{auth.user.username}</h3>
          <p>{auth.user.email}</p>
        </Card>
        <AddLink />
      </div>
    </div>
  </div>
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(Dashboard);