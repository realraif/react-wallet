import { makeStyles } from "@material-ui/styles";

const headerHeigth = 60;
const drawerWidth = 260;
const headerBorder = "1px solid #E5E5E5";
const menuActiveColor = "rgba(255, 255, 255, 0.23)";

const scrollbarWU = 1;
const itemIconWU = 3;
const buttonSpaceWU = 2;
const closedDrawerWU = 4 * buttonSpaceWU + itemIconWU;

export default makeStyles((theme) => ({
  layout: {
    maxWidth: "100vw",
    display: "flex",
  },
  content: {
    width: "100%",
    marginTop: headerHeigth,
    minHeight: `calc(100vh - ${headerHeigth}px)`,
  },
}));

export const useHeaderStyles = makeStyles((theme) => {
  const hover = {
    backgroundColor: "transparent",
    border: "1px solid transparent",
    "&:hover": {
      color: "#1DC7EA",
      border: "1px solid #1DC7EA",
    },
  };

  return {
    appBar: {
      minHeight: headerHeigth,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight: headerHeigth,
      borderBottom: headerBorder,
    },
    toolbarShift: {
      paddingLeft: theme.spacing(closedDrawerWU + 3),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      width: theme.spacing(closedDrawerWU),
      position: "absolute",
      top: 0,
      bottom: 0,
      display: "flex",
      zIndex: theme.zIndex.appBar + 1,
      "& button": {
        margin: "auto",
      },
    },
    headerItem: {
      margin: "0 5px 0 5px",
    },
    title: {
      fontSize: 25,
      fontWeight: 200,
    },
    selectBox: hover,
    dropDown: hover
  };
});

export const useSidebarStyles = makeStyles((theme) => ({
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
    width: theme.spacing(closedDrawerWU),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "& $itemLink": {
      minWidth: theme.spacing(2 * buttonSpaceWU + itemIconWU),
      transition: theme.transitions.create("max-width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    "& $itemText" :{
      opacity: 0,
      transition: theme.transitions.create("opacity", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  menu: {
    marginTop: 40
  },
  itemLink: {
    width: "auto",
    maxWidth: drawerWidth,
    transition: "all 300ms linear",
    margin: `10px ${theme.spacing(buttonSpaceWU)}px 0`,
    padding: `10px ${theme.spacing(buttonSpaceWU)}px`,
    borderRadius: "3px",
    position: "relative",
    display: "block",
    backgroundColor: "transparent",
    fontWeight: "bold",
    "&:hover,&:focus": {
      backgroundColor: menuActiveColor,
    },
  },
  itemIcon: {
    width: theme.spacing(itemIconWU),
    height: "30px",
    float: "left",
    marginRight: 20,
    color: "#FFF",
  },
  active: {
    "& $itemLink": {
      backgroundColor: menuActiveColor,
    },
  },
  itemText: {
    margin: "0",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: 500,
    textTransform: "uppercase",
    lineHeight: "30px",
    color: "#FFF",
    display: "flex",
    whiteSpace: "nowrap",
    opacity: 1
  },
  logoContainer: {
    minHeight: headerHeigth,
    borderBottom: headerBorder,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
  },
  logo: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: theme.spacing(2 * buttonSpaceWU),
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
