import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import placeholder from "../../../utils/images/no.svg";

const ReceviedLinkEmpty = props => {
  return <div className="align-center">
    <img src={placeholder} alt=""/>
    <p>No Recevied links found</p>
    <h6>Links sent from other linklib user will be shown Here</h6>
    <Button component={Link} to="/dashboard" variant="outlined" color="secondary" size="large" className="mt-3">
      Go back to dashboard
    </Button>
  </div>
}

export default ReceviedLinkEmpty;