import React from "react";

export const LayoutContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: action.isOpen };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function LayoutProvider({ children }) {
  var [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpen: true,
    toggleSidebar: () => {
      dispatch({
        type: "TOGGLE_SIDEBAR",
      });
    },
    openSideBar: (isOpen) => {
      dispatch({
        isOpen: isOpen,
        type: "OPEN_SIDEBAR",
      });
    },
  });

  return (
    <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
  );
}
