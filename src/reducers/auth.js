import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  SIGN_IN_LOADING,
  SIGN_UP_LOADING
} from "../constants";

let accessTokenStored = localStorage.getItem("accessToken");
console.log("access_token");
console.log(accessTokenStored);
const INITIAL_STATE = {
  accessToken: "",
  refreshToken: "",
  tokenType: "",
  isAuthenticated: accessTokenStored ? true : false,
  expiresIn: "",
  signUpLoading: false,
  signInLoading: false
};
export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      const {
        accessToken,
        refreshToken,
        expiresIn,
        tokenType
      } = action.payload;

      return {
        ...state,
        accessToken,
        refreshToken,
        expiresIn,
        tokenType,
        isAuthenticated: true
      };
    case REMOVE_AUTH_TOKEN:
      return { ...state, isAuthenticated: false };
    case SIGN_IN_LOADING:
      return { ...state, signInLoading: action.payload };
    case SIGN_UP_LOADING:
      return { ...state, signUpLoading: action.payload };
    default:
      return state;
  }
};
