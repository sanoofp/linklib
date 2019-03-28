import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawer, snackbarToggle } from "./actions/appStateAction";
import { loadUser } from "./actions/authAction";
import { Helmet } from "react-helmet";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { GlobalStyles } from "./utils/GlobalStyles";
import Header from "./components/Header";
import DrawerComponent from "./components/Drawer";
import Home from "./components/Home";
// import Dashboard from "./components/Dashboard/Dashboard";
import { SnackbarComponent } from './components/Snackbar';
import { main, dark } from "./utils/Theme";
import { muiTheme, darkMuiTheme } from "./utils/Mui/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Spinner from './components/Loader/Spinner'
import LoadableLoader from './components/Loader/LoadableLoader'
import LinearLoader from './components/Loader/LinearLoader'
// import SingleLink from "./components/SingleLink";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Loadable from "react-loadable";

const Dashboard = Loadable({
  loader: () => import("./components/Dashboard/Dashboard"),
  loading: LoadableLoader
});
const SingleLink = Loadable({
  loader: () => import("./components/SingleLink"),
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
    const { appState, snackbarToggle } = this.props;
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
            </Switch>
            <Spinner />
            <LinearLoader />
            <SnackbarComponent 
              handleSnackbarClose={() => snackbarToggle(false, "", appState.snackbar.type)} 
              open={appState.snackbar.open}
              msg={appState.snackbar.msg}
              type={appState.snackbar.type}
            />
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  { toggleDrawer, loadUser, snackbarToggle }
)(App);
