import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { loadCSS } from "fg-loadcss/src/loadCSS";

import { toggleDrawer } from "./actions/appStateAction";
import { loadUser } from "./actions/authAction";
import { GlobalStyles } from "./utils/GlobalStyles";
import Header from "./components/Header";
import { main, dark } from "./utils/Theme";
import { muiTheme, darkMuiTheme } from "./utils/Mui/Main";
import Spinner from './components/Loader/Spinner';
import LoadableLoader from './components/Loader/LoadableLoader';
import Loadable from "react-loadable";
import LinearLoader from './components/Loader/LinearLoader'
import "bootstrap/dist/css/bootstrap-grid.min.css";

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: LoadableLoader
});
const Dashboard = Loadable({
  loader: () => import("./components/Dashboard"),
  loading: LoadableLoader
});
const SingleLink = Loadable({
  loader: () => import("./components/SingleLink"),
  loading: LoadableLoader
});
const DrawerComponent = Loadable({
  loader: () => import("./components/Drawer"),
  loading: LoadableLoader
});
const SnackbarComponent = Loadable({
  loader: () => import("./components/Snackbar"),
  loading: LoadableLoader
});
const PageNotFound = Loadable({
  loader: () => import("./components/PageNotFound"),
  loading: LoadableLoader
});

class App extends Component {

  componentDidMount() {
    this.props.loadUser();
    loadCSS(
      "https://fonts.googleapis.com/css?family=Montserrat:700|Raleway:300",
      document.querySelector("#insertion-point-jss")
    );
  }

  handleDrawerClick = open => this.props.toggleDrawer(open);

  render() {
    const { darkTheme } = this.props.appState;
    const { appState, link } = this.props;
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
              isOpen={appState.drawerIsOpen}
              onCloseDrawer={this.handleDrawerClick}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/link/:id" component={SingleLink} />
              <Route path="*" exact component={PageNotFound} />
            </Switch>

            <Spinner />
            <LinearLoader />
            <SnackbarComponent />
          
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
  appState: state.appStateReducer,
});

export default connect(
  mapStateToProps,
  { toggleDrawer, loadUser }
)(App);
