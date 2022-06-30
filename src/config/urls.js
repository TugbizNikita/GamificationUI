export const API_BASE_URL = "http://3.215.18.129";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl("/generate_otp");
export const REGISTER = getApiUrl("/gamification_registration");
