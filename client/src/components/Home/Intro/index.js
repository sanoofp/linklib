import React from "react";
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
      <p>Linklib helps to manage your link with more ease. You can save your link to the dashboard and can be access from all your devices. The URL's can be shared through multiple social media platforms. Linklib is the efficient way for saving, shareing and management of Link and URL's</p>
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