import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawer } from "./actions/appStateAction";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "./utils/GlobalStyles";
import Header from "./components/Header";
import DrawerComponent from "./components/Drawer";
import Home from "./components/Home";
import { main, dark, muiTheme, darkMuiTheme } from "./utils/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  handleDrawerClick = open => this.props.toggleDrawer(open);

  render() {
    const { drawerIsOpen, darkTheme } = this.props.appState;

    return (
      <MuiThemeProvider theme={darkTheme ? darkMuiTheme : muiTheme}>
        <ThemeProvider theme={darkTheme ? dark : main}>
          <BrowserRouter>
            <Helmet>
              <meta
                name="theme-color"
                content={darkTheme ? dark.primary : main.primary}
              />
            </Helmet>
            <GlobalStyles darkTheme />
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
  toggleDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer }
)(App);
