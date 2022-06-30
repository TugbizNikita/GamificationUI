// import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  sessionExpired: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = AsyncStorage.getItem("@token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  console.log("userIsLoggedIn", userIsLoggedIn);
  console.log("initialToken", token);

  const loginHandler = (token) => {
    setToken(token);

    AsyncStorage.setItem("@token", token);
    console.log("storesetitem", token);
    // localStorage.setItem("auth.token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    AsyncStorage.removeItem("token");
    // console.log("Logout Token Remove", token);

    // localStorage.removeItem("auth.token");
  };
  const sessionHandler = () => {
    // setToken(null);
    // localStorage.removeItem("auth.token");
    // warningAlert("Session Expired!");
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    sessionExpired: sessionHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
