
import tinycolor from "tinycolor2";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  // type: "dark",
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  shape: {
    borderRadius: 2,
  },
  overrides: {
    MuiButton: {
      text: {
        padding: "7px 18px",
        border: "1px solid transparent",
        textTransform: "initial",
        fontSize: "1rem",
      },
      root: {
        "&:hover,&:focus": {
          color: "#1DC7EA",
          border: "1px solid #1DC7EA",
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FBFBFB",
        color: "#979797",
      },
    },
  },
};
