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
  const initialToken = AsyncStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    AsyncStorage.setItem("token", token);
    console.log("storesetitem", token);
    // localStorage.setItem("auth.token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    AsyncStorage.removeItem("token", token);

    // localStorage.removeItem("auth.token");
  };
  const sessionHandler = () => {
    setToken(null);
    localStorage.removeItem("auth.token");
    warningAlert("Session Expired!");
  };
  const contextValue = {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb21lIjoicGF5bG9hZCJ9.D-c7ihEgJo4iJWh6RUzTtKvLthJwbj2-q-mka-LMKZI",
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
