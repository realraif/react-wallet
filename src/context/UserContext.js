import React, { useEffect, useState } from "react";
import firebase from "../firebase.js";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setIsPending(false)
    });
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        currentUser,
        isPending
      }}
    >
      {children}
    </UserContext.Provider>
  );
};