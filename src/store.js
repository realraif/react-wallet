import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import dashboard from "./pages/Dashboard/dashboardSlice";
import balances from "./pages/BalancesScreen/balancesSlice";
import creditCards from "./pages/CreditCardsScreen/creditCardsSlice";
import budget from "./pages/BudgetScreen/budgetSlice";

const reducer = combineReducers({
  dashboard,
  balances,
  creditCards,
  budget,
});

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
});
