import axios from "axios";
import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  SIGNIN_URL,
  SIGNUP_URL,
  SET_USER_DETAILS,
  SIGNIN_ERRORS,
  SIGNUP_ERRORS,
  SIGNUP_ERRORS_EMPTY,
  SIGNIN_ERRORS_EMPTY
} from "../constants";

export const signin = signindetails => {
  alert(JSON.stringify(signindetails));
  return async dispatch => {
    try {
      let response = await axios.post(SIGNIN_URL, { ...signindetails });

      dispatch({ type: SET_AUTH_TOKEN, payload: response.data.token });
      dispatch({ type: SET_USER_DETAILS, payload: response.data.user });
      dispatch({ type: SIGNIN_ERRORS_EMPTY });
    } catch (error) {
      console.log("error in login");
      console.log(error.response);
      window.swal("Login Error", error.response.data.message, "error");
      dispatch({ type: SIGNIN_ERRORS, payload: error.response.data.errors });
    }
  };
};
export const signup = signupdetails => {
  return async dispatch => {
    try {
      let response = await axios.post(SIGNUP_URL, { ...signupdetails });

      const { accessToken, refreshToken, expiresIn, tokenType } = response.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expiresIn", expiresIn);
      localStorage.setItem("tokenType", tokenType);

      dispatch({ type: SET_AUTH_TOKEN, payload: response.data.token });
      dispatch({ type: SET_USER_DETAILS, payload: response.data.user });
      dispatch({ type: SIGNUP_ERRORS_EMPTY });
      // fetchUserLocationDetails()();
      // await fetchUserDetails()();
    } catch (error) {
      console.log("error in signup");
      /*[
        {
          field: "password",
          location: "body",
          messages: ['"password" length must be at least 6 characters long']
        },
        {
          field: "email",
          location: "body",
          messages: ['"password" length must be at least 6 characters long']
        }
      ];*/
      dispatch({ type: SIGNUP_ERRORS, payload: error.response.data.errors });
    }
  };
};

export const logout = () => {
  return async dispatch => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("tokenType");

    dispatch({ type: REMOVE_AUTH_TOKEN });
  };
};
export const setAuthToken = () => {
  return async dispatch => {};
};
