import tinycolor from "tinycolor2";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { lightenRate, darkenRate } from "themes/utils";

const breakpoints = createBreakpoints({});

const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

export default {
  palette: {
    type: "dark",
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: "#6E6E6E",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      light: "#F7F7F8",
      drawer: {
        light: "#000",
        dark: "#9393",
      },
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  box: {
    borderRadius: 6,
    borderColor: "#888888",
  },
  customSpacing: {
    pageTop: 20,
    pageSides: 30,
    sectionTitle: 30,
  },
  charts: {
    colors: ["#a275d0", "#559e55", "#75bad0"],
    bars: ["#a275d0", "#559e55", "#75bad0"],
    polar: [
      "#6c5b9f",
      "#396fbc",
      "#37c0a7",
      "#8fe1a1",
      "#88aedc",
      "#f7d3e9",
      "#2e8a60",
    ],
    pieBorder: "#c5c5c5",
  },
  sections: {
    overview: {
      expenses: {
        height: 250,
      },
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
    MuiDrawer: {
      paper: {
        color: "#fff",
      },
    },
    MuiListItem: {
      button: {
        color: "#fff",
      },
    },
    MuiCard: {
      root: {
        borderRadius: 6,
        border: "1px solid #888888",
      },
    },
    MuiCardActionArea: {
      root: {
        color: "inherit",
      },
    },
    MuiGrid: {
      root: {
        [breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 6,
      },
      elevation5: {
        boxShadow:
          "0px 3px 5px -1px #7877de33, 0px 5px 8px 0px #7877de33, 0px 1px 14px 0px #7877de33",
      },
    },
    MuiTableCell: {
      root: {
        lineHeight: 1.43,
        fontSize: 14,
        padding: 16,
      },
    },
  },
};
