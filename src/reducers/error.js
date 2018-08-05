import {
  SIGNIN_ERRORS,
  SIGNUP_ERRORS,
  SIGNIN_ERRORS_EMPTY,
  SIGNUP_ERRORS_EMPTY
} from "../constants";

const INITIAL_STATE = {
  signupErrors: {},
  signinErrors: {}
};
export const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_ERRORS:
      const newErrors = action.payload.reduce(
        (finalOutput, currentObject, z) => {
          finalOutput[currentObject.field] = currentObject.messages;
          return finalOutput;
        },
        {}
      );

      return {
        ...state,
        signupErrors: { ...state.signupErrors, ...newErrors }
      };
    case SIGNUP_ERRORS_EMPTY:
      return {
        ...state,
        signupErrors: {}
      };
    case SIGNIN_ERRORS:
      return { ...state, isAuthenticated: false };
    case SIGNIN_ERRORS_EMPTY:
      return {
        ...state,
        signinErrors: {}
      };
    default:
      return state;
  }
};
