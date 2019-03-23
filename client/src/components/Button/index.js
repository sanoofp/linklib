import React from "react";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import Button from "@material-ui/core/Button";
import { colors } from "../../utils/Theme";
import PersonAddRounded from "@material-ui/icons/PersonAddRounded";

export const SigninButtonComponent = props => {
  return (
    <Button
      fullWidth={props.fullWidth ? true : false}
      onClick={props.onClick}
      style={{ margin: props.margin, color: colors.white }}
      variant="contained"
      color="primary"
    >
      <ExitToAppRounded style={{ marginRight: 6 }} />
      Signin
    </Button>
  );
};

export const SignupButtonComponent = props => {
  return (
    <Button
      fullWidth={props.fullWidth ? true : false}
      onClick={props.onClick}
      style={{ margin: props.margin }}
      variant={props.variant}
      color="secondary"
      type={props.type}
    >
      <PersonAddRounded style={{ marginRight: 6 }} />
      Create account
    </Button>
  );
};
