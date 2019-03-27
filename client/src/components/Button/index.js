import React from "react";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import Button from "@material-ui/core/Button";
import { colors } from "../../utils/Theme";
import PersonAddRounded from "@material-ui/icons/PersonAddRounded";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  signInBtn: {
    padding: "14px 36px",
    borderRadius: 25,
    // border: "1px solid transparent",
    // color: colors.whiteAlpha,
    // boxShadow: 'none',
    // borderColor: "transparent !important",
    // '&:hover': {
    //   border: `1px solid ${theme.palette.primary.type === "dark" ? colors.whiteAlpha : colors.primaryGreen } !important`,      
    //   color: `${theme.palette.primary.type === "dark" ? colors.white : colors.primaryGreen } !important`,
    //   backgroundColor: "transparent",
    //   boxShadow: 'none',
    // },
    // '&:active': {
    //   border: `1px solid ${theme.palette.primary.type === "dark" ? colors.whiteAlpha : colors.primaryGreen } !important`,      
    //   boxShadow: 'none',
    //   backgroundColor: "transparent",
    // },
    // '&:focus': {
    //   color: `${theme.palette.primary.type === "dark" ? colors.white : colors.primaryGreen } !important`,      
    //   backgroundColor: "transparent",
    //   border: `1px solid ${theme.palette.primary.type === "dark" ? colors.whiteAlpha : colors.primaryGreen } !important`,      
    //   boxShadow: 'none',
    // }
  },
  signUpBtn: {
    padding: "14px 36px",
    borderRadius: 25
    // boxShadow: "none"
  }
});

export const SigninButtonComponent = withStyles(styles)(props => <Button
    fullWidth={props.fullWidth ? true : false}
    onClick={props.onClick}
    style={{ margin: props.margin, color: colors.white }}
    variant="contained"
    color="primary"
    type={props.type}
    className={props.classes.signInBtn}
  > 
    <ExitToAppRounded style={{ marginRight: 6 }} />
    Signin
  </Button>
);

export const DashboardButtonComponent = withStyles(styles)(props => <Button
    fullWidth={true}
    component={Link}
    to="/dashboard"
    style={{ margin: props.margin, color: colors.white }}
    variant="contained"
    color="primary"
    className={props.classes.signInBtn}
  > 
    <DashboardRounded style={{ marginRight: 6 }} />
    Go to Dashboard
  </Button>
);


export const SignupButtonComponent = withStyles(styles)(props => <Button
    fullWidth={props.fullWidth ? true : false}
    onClick={props.onClick}
    style={{ margin: props.margin }}
    variant={props.variant}
    color="secondary"
    type={props.type}
    className={props.classes.signUpBtn}    
  >
    <PersonAddRounded style={{ marginRight: 6 }} />
    Create account
  </Button>)
;

