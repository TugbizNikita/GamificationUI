// import { apiPost } from "../../utils/utils";
import { LOGIN, REGISTER } from "../../Config/urls";

export function login(data) {
  return apiPost(LOGIN, data);
}
export function Register(data) {
  return apiPost(REGISTER, data);
}
