import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { main, dark } from "../../../utils/Theme";
import { muiTheme, darkMuiTheme } from "../../../utils/Mui/Main";

const MainThemeProvider = props => { 
  return <MuiThemeProvider theme={props.darkTheme ? darkMuiTheme : muiTheme}>
    <ThemeProvider theme={props.darkTheme ? dark : main}>
      {props.children}
    </ThemeProvider>
  </MuiThemeProvider>
}

export default MainThemeProvider;