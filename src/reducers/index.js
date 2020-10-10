import { combineReducers } from "redux";
import dashboard from "./dashboard";
import balancesTrend from "./balancesTrend";
import creditCardsCurrent from "./creditCardsCurrent";

export default combineReducers({
  dashboard,
  balancesTrend,
  creditCardsCurrent,
});
