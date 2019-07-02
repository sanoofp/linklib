import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import { toggleDrawer } from "./actions/appStateAction";
import { loadUser } from "./actions/authAction";
import { GlobalStyles } from "./utils/GlobalStyles";
import MainThemeProvider from "./components/HelperComponent/theme_provider";
import { dark, main } from "./utils/Theme";
import Header from "./components/Header";
import LoadableLoader from "./components/Loader/LoadableLoader";
import Loadable from "react-loadable";
import "bootstrap/dist/css/bootstrap-grid.min.css";

const DrawerComponent = Loadable({
  loader: () => import("./components/Drawer"),
  loading: LoadableLoader
});
const Utility = Loadable({
  loader: () => import("./components/HelperComponent/utility"),
  loading: LoadableLoader
});
const RouterSwitch = Loadable({
  loader: () => import("./components/HelperComponent/router_switch"),
  loading: LoadableLoader
});

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  handleDrawerClick = open => this.props.toggleDrawer(open);

  render() {
    const { darkTheme } = this.props.appState;
    const { appState, link } = this.props;
    return (
      <MainThemeProvider darkTheme={darkTheme}>
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
            isOpen={appState.drawerIsOpen}
            onCloseDrawer={this.handleDrawerClick}
          />

          <RouterSwitch />
          <Utility />
        </BrowserRouter>
      </MainThemeProvider>
    );
  }
}

App.propTypes = {
  appState: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer, loadUser }
)(App);
