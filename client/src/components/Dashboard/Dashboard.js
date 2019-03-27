import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Card = styled.div`
  margin: 18px auto;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => props.theme.bodybg};
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
  padding: 12px 0px
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
  h3 {
    margin: 5px 0px;
  }
  p {
    margin: 0;
    color: #666;
  }
`;

const Dashboard = (props) => {
  const { auth } = props;
  if(!auth.isAuthenticated) {
    return <Redirect to="/" />
  }
  return auth.user && <div className="container mb-2">
    <div className="row">
      <div className="col-md-7">
      
      </div>
      <div className="col-md-5">
        <Card>
          <img src={auth.user.avatar} alt={auth.user.username}/>
          <h3>{auth.user.username}</h3>
          <p>{auth.user.email}</p>
        </Card>
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