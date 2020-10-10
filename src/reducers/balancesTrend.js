import {
  DASHBOARD_LOADED,
  DASHBOARD_DESTROYED,
  BALANCES_SCREEN_LOADED,
  BALANCES_SCREEN_DESTROYED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_LOADED:
      return { ...state, balances: action.payload[2].balances };
    case DASHBOARD_DESTROYED:
      return {};
    case BALANCES_SCREEN_LOADED:
      return {
        ...state,
        balances: action.payload[0].balances,
        currentBalance: action.payload[0].balances.map((balance) => {
          const { balanceId, trend } = balance;
          return { balanceId, current: trend[trend.length - 1] };
        }),
      };
    case BALANCES_SCREEN_DESTROYED:
      return {};
    default:
      return state;
  }
};
