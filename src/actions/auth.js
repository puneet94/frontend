import axios from "axios";
import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  SIGNIN_URL,
  SIGNUP_URL,
  SET_USER_DETAILS
} from "../constants";

export const signin = signindetails => {
  alert(JSON.stringify(signindetails));
  return async dispatch => {
    try {
      let response = await axios.post(SIGNIN_URL, { ...signindetails });

      dispatch({ type: SET_AUTH_TOKEN, payload: response.data.token });
      dispatch({ type: SET_USER_DETAILS, payload: response.data.user });
      // fetchUserLocationDetails()();
      // await fetchUserDetails()();
    } catch (error) {
      console.log("error in login");
      console.log(error);
    }
  };
};
export const signup = signupdetails => {
  return async dispatch => {
    try {
      let response = await axios.post(SIGNUP_URL, { ...signupdetails });

      dispatch({ type: SET_AUTH_TOKEN, payload: response.data.token });
      dispatch({ type: SET_USER_DETAILS, payload: response.data.user });
      // fetchUserLocationDetails()();
      // await fetchUserDetails()();
    } catch (error) {
      console.log("error in login");
      console.log(error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    dispatch({ type: REMOVE_AUTH_TOKEN });
  };
};
export const setAuthToken = () => {
  return async dispatch => {};
};
