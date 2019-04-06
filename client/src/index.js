import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";
import App from "./App";

if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(reg => console.log("REGISTERED"))
      .catch(err => console.log("SW NOT REGISTRED", err));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
