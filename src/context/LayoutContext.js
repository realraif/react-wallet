import React from "react";

export const LayoutContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: action.isOpen };
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const LayoutProvider = ({ children }) => {
  var [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpen: true,
    openSideBar: (isOpen) => {
      dispatch({
        isOpen: isOpen,
        type: "OPEN_SIDEBAR",
      });
    },
    toggleSidebar: () => {
      dispatch({
        type: "TOGGLE_SIDEBAR",
      });
    },
  });

  return (
    <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
