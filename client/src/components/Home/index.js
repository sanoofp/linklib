import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { dialogAction } from "../../actions/appStateAction";
import { HomeCircle } from "../svg/svgLogo";
import { withStyles } from "@material-ui/core/styles";
import {
  HomeContainer,
  HomeIntro,
  IntroText,
  ButtonContainer,
  MuiButtonStyles
} from "./style";
import { SigninButtonComponent, SignupButtonComponent, DashboardButtonComponent } from "../Button";
// import SignupModel from "../Dialogs/Signup/Signup";
// import SigninModel from "../Dialogs/SignIn/SignIn";
import Loadable from "react-loadable";
import LoadableLoader from "../Loader/LoadableLoader";

const SignupModel = Loadable({
  loader: () => import("../Dialogs/Signup/Signup"),
  loading: LoadableLoader
});
const SigninModel = Loadable({
  loader: () => import("../Dialogs/SignIn/SignIn"),
  loading: LoadableLoader
});

class Home extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if(isAuthenticated) {   
      return <Redirect to="/dashboard" />
    }
  }
  render() {

  const { isAuthenticated, dialogAction } = this.props;

  return (
    <HomeContainer>
      <Helmet>
        <title>{`Linklib - Home`}</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <HomeIntro>
              <HomeCircle />
              <IntroText>
                <h1>Linklib</h1>
                <p>Save. Share and Manage link</p>
              </IntroText>
            </HomeIntro>
          </div>
          <div className="col-lg-5 d-flex flex-column align-items-start justify-content-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              corrupti nisi dolorem assumenda delectus eos in, minima, obcaecati
              excepturi veritatis vel deserunt a labore? Quam harum voluptatum
              suscipit ducimus porro!
            </p>
            <ButtonContainer>
              {isAuthenticated ? 
                <DashboardButtonComponent />
                :
                <React.Fragment>
                <SigninButtonComponent
                  onClick={() => dialogAction("signInDialogOpen", true)}
                />
                <SignupButtonComponent
                  variant="outlined"
                  onClick={() => dialogAction("signUpDialogOpen", true)}
                />
                </React.Fragment>                
              } 
            </ButtonContainer>
          </div>
        </div>
      </div>
      <SigninModel />
      <SignupModel />
      
    </HomeContainer>
  );
  }
};

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
