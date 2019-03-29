import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Card, ScrollFixTarget } from "./styles";
import AddLink from "./Add/AddLink";
import ShowLinks from "./Show/ShowLinks";
import { getUserLink } from "../../actions/linkAction";

class Dashboard extends Component {
  state = {
    cardPositionFixed: false
  };
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    if (this.props.auth.isAuthenticated) {
      this.props.getUserLink();
    }
    const headerHeight = document.querySelector("#header").clientHeight;
    if(window.innerWidth > 768) {
      document.addEventListener("scroll", event => {
        if(this._isMounted  ) {
          if (window.scrollY > headerHeight) {
            this.setState({
              cardPositionFixed: true,
            });
          } else {
            this.setState({ cardPositionFixed: false });
          }
        }
      });

    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { auth } = this.props;
    if (!auth.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container mb-2">
        <div className="row">
          <div className="col-md-8">
            <ShowLinks />
          </div>
          <div className="col-md-4 position-relative">
            <ScrollFixTarget
              id="scroll-fix-target"
              cardPositionFixed={this.state.cardPositionFixed}
            >
              <Card>
                <img src={auth.user.avatar} alt={auth.user.username} />
                <h3>{auth.user.username}</h3>
                <p>{auth.user.email}</p>
              </Card>
              <AddLink />
            </ScrollFixTarget>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getUserLink: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  { getUserLink }
)(Dashboard);
