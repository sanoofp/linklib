import React from "react";
import Button from "@material-ui/core/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContributeContainer } from "../style";
import A from "../../Button/A";
import art from "../../../utils/images/contribute.svg";
import artDark from "../../../utils/images/contribute_dark.svg";

const Contribute = props => {
  return <ContributeContainer> 
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 py-4">
          <h1>Contribution</h1>
          <p>All contribution are welcome. Feel free to add new features or report a bug.  <span role="img" aria-label="smile">😊</span></p>
          <Button variant="contained" color="primary" component={A} href="https://github.com/sanoofp/linklib" aria-label="github">
            <FontAwesomeIcon icon={faGithub} size="1x" /> Github
          </Button>
        </div>
        <div className="col-md-6">
          <img src={props.darkTheme ? artDark : art} alt="Contribute"/>
        </div>
      </div>
    </div>
  </ContributeContainer>
};

export default Contribute;
