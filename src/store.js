import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import dashboard from "./pages/Dashboard/dashboardSlice";
import balances from "./pages/BalancesScreen/balancesSlice";
import creditCards from "./pages/CreditCardsScreen/creditCardsSlice";
import budget from "./pages/BudgetScreen/budgetSlice";

const reducer = {
  dashboard,
  balances,
  creditCards,
  budget,
};

let middleware = [...getDefaultMiddleware()];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export default configureStore({
  reducer,
  middleware,
});
