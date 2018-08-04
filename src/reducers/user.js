import { SET_USER_DETAILS } from "../constants";

const INITIAL_STATE = {
  id: "",
  email: "",
  role: "",
  createdAt: ""
};
export const auth_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      const { id, email, role, createdAt } = action.payload;
      return {
        ...state,
        id,
        email,
        role,
        createdAt
      };

    default:
      return state;
  }
};
