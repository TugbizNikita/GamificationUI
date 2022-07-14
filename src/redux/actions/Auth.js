import { LOGIN, REGISTER } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utils";
import Store from "../Store";
import Types from "../Types";

const { dispatch } = Store;

export const saveUserData = (data) => {
  dispatch({
    type: Types.LOGIN,
    payload: data,
  });
};

export function login(data) {
  return new Promise((resolve, reject) => {
    return apiPost(LOGIN, data)
      .then((res) => {
        if (res.data.status_code === 1) {
          setUserData(res.data).then(() => {
            resolve(res);
            saveUserData(res.data);
          });
          return;
        }
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function Register(data) {
  return apiPost(REGISTER, data);
}

export function logout() {
  dispatch({ type: Types.CLEAR_REDUX_STATE });
  clearUserData();
}
