import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";
import { muiTheme, main as mainTheme } from "./utils/Theme";
import App from "./App";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
