import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Loadable from "react-loadable";
import LoadableLoader from './components/Loader/LoadableLoader';
// import loadSW from "./reg";

const App = Loadable({
  loader: () => import("./App"),
  loading: LoadableLoader
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
