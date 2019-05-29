import React from "react";
import Fade from "react-reveal/Fade";
import { SigninButtonComponent, SignupButtonComponent, DashboardButtonComponent } from "../../Button";
import {
  HomeIntro,
  IntroText,
  ButtonContainer,
  Intro as IntroContainer
} from "../style";
import { HomeCircle } from "../../svg/svgLogo";


const Intro = props => <IntroContainer><div className="container">
  <div className="row">
    <div className="col-lg-7">
      <Fade bottom distance="20px">
        <HomeIntro>
            <HomeCircle />
            <IntroText>
              <h1>Linklib</h1>
              <p>Save, Share and Manage link</p>
            </IntroText>
        </HomeIntro>
      </Fade>
    </div>
    <div className="col-lg-5 d-flex flex-column align-items-start justify-content-center">
      <Fade bottom distance="20px">
          <p>Linklib helps to manage your link with more ease. You can save your link to the dashboard and can be accessed from all your devices.</p>
          <p>The URL's can be shared through multiple social media platforms. Linklib is an efficient way of saving, sharing, and management of Link and URLs.</p>
      </Fade>
        <ButtonContainer>
          {props.isAuthenticated ? 
            <DashboardButtonComponent />
            :
            <React.Fragment>
            <SigninButtonComponent
              onClick={() => props.dialogAction("signInDialogOpen", true)}
            />
            <SignupButtonComponent
              variant="outlined"
              onClick={() => props.dialogAction("signUpDialogOpen", true)}
            />
            </React.Fragment>                
          } 
        </ButtonContainer>
    </div>
  </div>
</div>
</IntroContainer>

export default Intro;