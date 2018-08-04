import axios from "axios";
import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  SIGNIN_URL,
  SIGNUP_URL,
  SET_USER_DETAILS
} from "../constants";

export const signin = signindetails => {
  return async dispatch => {
    try {
      let response = await axios.post(SIGNIN_URL, { signindetails });

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
  alert(JSON.stringify(signupdetails));
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
    await AsyncStorage.removeItem(JWT_TOKEN);
    dispatch({ type: REMOVE_AUTH_TOKEN });
    Actions.logo();
  };
};
export const setAuthToken = () => {
  return async dispatch => {};
};
