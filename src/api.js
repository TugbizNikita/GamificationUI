import axios from "axios";
import { API_SERVER_URL } from "./app_constant";

export default {
  auth: {
    //Registration API
    registrationRequest: async (data) => {
      let res = await axios.post(
        API_SERVER_URL + "/gamification_registration/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Call ===> Registration request", res);
      console.log("key Status", res.status);
      return res;
    },

    loginRequest: async (data) => {
      let res = await axios.post(API_SERVER_URL + "/generate_otp/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Call ===> Login request", res);
      console.log("key Status", res.status);
      return res;
    },

    otpRequest: async (data) => {
      let res = await axios.post(API_SERVER_URL + "/verify_otp/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Call ===> OTP request", res);
      console.log("key Status", res.status);
      return res;
    },
  },
};
