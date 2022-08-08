import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async (dispatch) => {
    let userToken = await AsyncStorage.getItem("token");
    console.log("token11====>", userToken);

    let userName = await AsyncStorage.getItem("userName");
    console.log("userName====>", userName);

    if (userToken !== null) {
      console.log("token fetched");
      dispatch({
        type: "LOGIN",
        userId: userName,
        payload: userToken,
      });
    }
  };
};

export const Login = (loginId, pass, token) => {
  return async (dispatch) => {
    let userToken = null;
    let userName = null;
    if (loginId == loginId && pass == pass) {
      userToken = token;
      console.log("0000", userToken);
      userName = loginId;

      // here we can use login api to get token and then store it
      await AsyncStorage.setItem("token", userToken);
      await AsyncStorage.setItem("userName", userName);
      //   await AsyncStorage.setItem("username", username);
      console.log("token storedd");
      console.log("token stored user", userName);
    }
    dispatch({
      type: "LOGIN",
      payload: userToken,
      userId: userName,
    });
  };
};

export const LoginWithOtp = (mail, otp, token) => {
  return async (dispatch) => {
    let uerToken = null;
    let userName = null;
    if (mail == mail && otp == otp) {
      uerToken = token;
      console.log("0000", uerToken);
      userName = mail;

      // here we can use login api to get token and then store it
      await AsyncStorage.setItem("token", uerToken);
      await AsyncStorage.setItem("userName", userName);
      //   await AsyncStorage.setItem("username", username);
      console.log("token storedd");
      console.log("token stored user", userName);
    }
    dispatch({
      type: "LOGINOTP",
      payload: uerToken,
      userId: userName,
    });
  };
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};

// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const Init = () => {
//   return async (dispatch) => {
//     let usertoken = await AsyncStorage.getItem("token");
//     console.log("token11====>", usertoken);

//     let userName = await AsyncStorage.getItem("userName");
//     console.log("userName====>", userName);

//     if (usertoken !== null) {
//       console.log("token fetched");
//       dispatch({
//         type: "LOGIN",
//         userId: userName,
//         payload: usertoken,
//       });
//     }
//   };
// };

// export const Login = (loginId, pass, token) => {
//   return async (dispatch) => {
//     let usertoken = null;
//     let userName = null;
//     if (loginId === loginId && pass == pass) {
//       usertoken = token;
//       userName = loginId;

//       // here we can use login api to get token and then store it
//       await AsyncStorage.setItem("token", usertoken);
//       await AsyncStorage.setItem("userName", userName);
//       //   await AsyncStorage.setItem("username", username);
//       console.log("token storedd");
//       console.log("token stored user", userName);
//     }
//     dispatch({
//       type: "LOGIN",
//       payload: usertoken,
//       userId: userName,
//     });
//   };
// };

// export const Logout = () => {
//   return async (dispatch) => {
//     await AsyncStorage.clear();
//     dispatch({
//       type: "LOGOUT",
//     });
//   };
// };
