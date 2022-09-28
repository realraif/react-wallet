import React, { useEffect, useState } from "react";
import { auth } from "firebaseAuth.js";

export const UserContext = React.createContext();
const defaultUser = { name: "", email: "" };

const UserProvider = ({ children, isDefaultUserMode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (isDefaultUserMode) {
      setCurrentUser(defaultUser);
      setIsPending(false);
    } else {
      auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setIsPending(false);
      });
    }
  }, [isDefaultUserMode]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isPending,
        isDefaultUserMode
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
