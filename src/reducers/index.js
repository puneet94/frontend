import { combineReducers } from "redux";

import { auth } from "./auth";
import { user } from "./user";
export const root_reducer = combineReducers({
  auth,
  user
});
