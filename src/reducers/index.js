import { combineReducers } from "redux";

import { auth } from "./auth";
import { auth, user } from "./auth";
export const root_reducer = combineReducers({
  auth,
  user
});
