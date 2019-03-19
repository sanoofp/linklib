import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { GlobalStyles } from './utils/GlobalStyles';
import Header from "./components/Header";
import DrawerComponent from './components/Drawer';
import { main } from './utils/Theme';

class App extends Component {
  state = {
    isOpen: false
  }

  handleDrawerClick = open => {
    this.setState({isOpen: open});
  }

  render() {
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <meta name="theme-color" content={main.primary} />          
        </Helmet>
        <GlobalStyles />

        <Header onBtnClick={() => this.handleDrawerClick(true)} />
        <DrawerComponent isOpen={isOpen} onClose={this.handleDrawerClick} />

      </React.Fragment>
    );
  }
}

export default App;
