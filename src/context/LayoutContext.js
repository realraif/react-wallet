import React from "react";

export const LayoutContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function LayoutProvider({ children }) {
  var [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpen: true,
    toggleSidebar: () => {
      console.log('TOGGLE_SIDEBAR');
      dispatch({
        type: "TOGGLE_SIDEBAR",
      });
    }
  });

  return (
    <LayoutContext.Provider value={state}>
        {children}
    </LayoutContext.Provider>
  );
}
