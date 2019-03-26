import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawer } from "./actions/appStateAction";
import { loadUser } from "./actions/authActions";
import { Helmet } from "react-helmet";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { GlobalStyles } from "./utils/GlobalStyles";
import Header from "./components/Header";
import DrawerComponent from "./components/Drawer";
import Home from "./components/Home";
import { main, dark } from "./utils/Theme";
import { muiTheme, darkMuiTheme } from "./utils/Mui/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
    loadCSS(
      "https://fonts.googleapis.com/css?family=Montserrat:700|Raleway:300",
      document.querySelector("#insertion-point-jss")
    );
    // loadCSS(bootstrap);
  }

  handleDrawerClick = open => this.props.toggleDrawer(open);

  render() {
    const { drawerIsOpen, darkTheme } = this.props.appState;

    return (
      <MuiThemeProvider theme={darkTheme ? darkMuiTheme : muiTheme}>
        <ThemeProvider theme={darkTheme ? dark : main}>
          <BrowserRouter>
            <GlobalStyles darkTheme />
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <meta
                name="theme-color"
                content={darkTheme ? dark.primary : main.primary}
              />
            </Helmet>
            <Header onBtnClick={() => this.handleDrawerClick(true)} />
            <DrawerComponent
              isOpen={drawerIsOpen}
              onCloseDrawer={this.handleDrawerClick}
            />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  appState: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer, loadUser }
)(App);
