import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import balances from "./pages/BalancesScreen/balancesSlice";
import dashboard from './pages/Dashboard/dashboardSlice';

const reducer = combineReducers({
  dashboard,
  balances,
});

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
});
