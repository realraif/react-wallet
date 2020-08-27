import { makeStyles } from "@material-ui/styles";

const drawerWidth = 260;
const scrollbarWU = 1;
const itemIconWU = 3;
const buttonSpace = 2;

export default makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: "rgba(0, 0, 0, 0.62)",
    border: 0,
  },
  drawerContainer: {
    "& :hover $arrowButton": {
      opacity: 1,
    },
    "& ::-webkit-scrollbar": {
      width: theme.spacing(scrollbarWU),
    },
    "& ::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    },

    "& ::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      borderRadius: 6,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: "hidden",
    width: theme.spacing(4*buttonSpace + itemIconWU + scrollbarWU),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "& $itemLink": {
      maxWidth: theme.spacing(2*buttonSpace + itemIconWU),
      transition: theme.transitions.create("max-width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  itemLink: {
    width: "auto",
    maxWidth: drawerWidth,
    transition: "all 300ms linear",
    margin: `10px ${theme.spacing(buttonSpace)}px 0`,
    padding: `10px ${theme.spacing(buttonSpace)}px`,
    borderRadius: "3px",
    position: "relative",
    display: "block",
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  itemIcon: {
    width: theme.spacing(itemIconWU),
    height: "30px",
    float: "left",
    marginRight: theme.spacing(2*buttonSpace + scrollbarWU),
    color: "#FFF",
  },
  blue: {
    "&:hover,&:focus": {
      backgroundColor: "#00acc1",
    },
  },
  active: {
    "& $blue": {
      backgroundColor: "#00acc1",
    },
  },
  itemText: {
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: "#FFF",
    display: "flex",
    whiteSpace: "nowrap",
  },
  logo: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: theme.spacing(2*buttonSpace),
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    color: "#68B3FD",
    marginRight: 4,
  },
  logoTitle: {
    fontSize: 19,
    fontWeight: 200,
    color: "#fff",
    letterSpacing: 3,
  },
  arrowButton: {
    color: "#fff",
    margin: "auto 4px auto auto;",
    opacity: 0,
    transition: "all 300ms linear",
  },
}));
