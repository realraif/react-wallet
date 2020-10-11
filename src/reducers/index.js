import { combineReducers } from "redux";
import dashboard from "./dashboard";
import balancesTrend from "./balancesTrend";
import creditCardsCurrent from "./creditCardsCurrent";
import balancesScreen from "./balancesScreen";
import creditCardsScreen from "./creditCardsScreen";
import budgetScreen from "./budgetScreen";

export default combineReducers({
  dashboard,
  balancesTrend,
  creditCardsCurrent,
  balancesScreen,
  creditCardsScreen,
  budgetScreen,
});
