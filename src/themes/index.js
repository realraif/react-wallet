import defaultTheme from "./default";
import darkTheme from "./dark";

import { createTheme } from "@material-ui/core";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
};

const getTheme = (themeName) =>
  ({
    default: createTheme({ ...defaultTheme, ...overrides }),
    dark: createTheme({ ...darkTheme, ...overrides }),
  }[themeName || "default"]);

export default getTheme;
