import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FBFBFB",
        color: "#979797"
      },
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LayoutProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LayoutProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
