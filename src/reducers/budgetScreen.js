import {
  BUDGET_SCREEN_LOADED,
  BUDGET_SCREEN_DESTROYED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case BUDGET_SCREEN_LOADED:
      return {
        ...state,
        sankey: action.payload[0].sankey,
        totalExpensesTrend: action.payload[1].polar,
      };
    case BUDGET_SCREEN_DESTROYED:
      return {};
    default:
      return state;
  }
};
