import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  function settingUserData(data) {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "123");
    setUserData(data);
  }

  return (
    <UserContext.Provider value={{ userData, settingUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
