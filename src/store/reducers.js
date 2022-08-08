import React from "react";

const initialState = {
  authToken: null,
  userName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state, //copy all previous states
        authToken: action.payload,
        userName: action.userId,
      };

    case "LOGINOTP":
      return {
        ...state, //copy all previous states
        authToken: action.payload,
        userName: action.userId,
      };

    case "LOGOUT":
      return {
        authToken: null,
        userName: null,
      };

    default:
      return state;
  }
};
