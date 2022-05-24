export const API_BASE_URL = "http://3.215.18.129/gamification_registration/";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// export const LOGIN = getApiUrl('/login')
export const REGISTER = getApiUrl("/gamification_registration");
