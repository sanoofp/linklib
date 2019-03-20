import React from "react";
import { HomeCircle } from "./svg/svgLogo";
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { 
  HomeContainer, 
  HomeIntro, 
  IntroText, 
  ButtonContainer,
  MuiButtonStyles
} from "./Styles";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import PersonAddRounded from "@material-ui/icons/PersonAddRounded";

const Home = props => {
  const { classes } = props;
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
              <Button variant="contained" color="primary" className={classes.btn}>
                <ExitToAppRounded className={classes.icon} />
                Login
              </Button>
              <Button varient="flat" color="secondary" className={classNames(classes.btnSignUp)}>
                <PersonAddRounded className={classes.icon} />
                Create an account
              </Button>
              
              
            </ButtonContainer>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default withStyles(MuiButtonStyles)(Home);
