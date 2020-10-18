import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import "./index.css";
import Themes from "./themes";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <LayoutProvider>
        <UserProvider>
          <CssBaseline />
          <App />
        </UserProvider>
      </LayoutProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
