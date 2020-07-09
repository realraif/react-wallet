import React, { useEffect, useState } from "react";
import firebase from "../firebase.js";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};