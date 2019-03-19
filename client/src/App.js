import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { GlobalStyles } from "./utils/GlobalStyles";
import Header from "./components/Header";
import DrawerComponent from "./components/Drawer";
import { main, dark, muiTheme, darkMuiTheme } from "./utils/Theme";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";


class App extends Component {
  state = {
    isOpen: false
  };

  handleDrawerClick = open => {
    this.setState({ isOpen: open });
  };

  render() {
    const { darkTheme } = this.props.settings;
    const { isOpen } = this.state;
    return (<MuiThemeProvider theme={darkTheme ? darkMuiTheme : muiTheme}>
      <ThemeProvider theme={darkTheme ? dark : main}>
        <BrowserRouter>
                              
          <Helmet>
            <meta name="theme-color" content={darkTheme ? dark.primary : main.primary} />
          </Helmet>
          <GlobalStyles darkTheme />
          <Header onBtnClick={() => this.handleDrawerClick(true)} />
          <DrawerComponent isOpen={isOpen} onClose={this.handleDrawerClick} />

       </BrowserRouter>
    </ThemeProvider>
  </MuiThemeProvider>);
  }
    
}

App.propTypes = {
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  settings: state.settingsReducer
});

export default connect(mapStateToProps)(App);
