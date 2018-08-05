import { combineReducers } from "redux";

import { auth } from "./auth";
import { user } from "./user";
import { error } from "./error";
export const root_reducer = combineReducers({
  auth,
  user,
  error
});
