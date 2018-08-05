import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from "../constants";

let accessTokenStored = localStorage.getItem("accessToken");
console.log("access roken");
console.log(accessTokenStored);
const INITIAL_STATE = {
  accessToken: "",
  refreshToken: "",
  tokenType: "",
  isAuthenticated: accessTokenStored ? true : false,
  expiresIn: ""
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
    default:
      return state;
  }
};
