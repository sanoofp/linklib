import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dialogAction } from '../../actions/appStateAction';
import { HomeCircle } from "../svg/svgLogo";
import { withStyles } from '@material-ui/core/styles';
import { 
  HomeContainer, 
  HomeIntro, 
  IntroText, 
  ButtonContainer,
  MuiButtonStyles
} from './style';
import { SigninButtonComponent, SignupButtonComponent } from "../Button";
import SigninModel from "../Dialogs/SignIn/SignIn";
import SignupModel from "../Dialogs/Signup/Signup";

const Home = props => {
  return (
    <HomeContainer>
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
              <SigninButtonComponent onClick={() => props.dialogAction("signInDialogOpen", true)} />
              <SignupButtonComponent variant="outlined" onClick={() => props.dialogAction("signUpDialogOpen", true)} />
            </ButtonContainer>
          </div>
        </div>
      </div>
      <SigninModel />
      <SignupModel />
    </HomeContainer>
  );
};


Home.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { dialogAction })(withStyles(MuiButtonStyles)(Home));
