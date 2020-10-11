import {
  CREDIT_CARDS_SCREEN_LOADED,
  CREDIT_CARDS_SCREEN_DESTROYED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case CREDIT_CARDS_SCREEN_LOADED:
      return {
        ...state,
        spider: action.payload[0].spider,
        categoryExpenses: action.payload[1].trend,
      };
    case CREDIT_CARDS_SCREEN_DESTROYED:
      return {};
    default:
      return state;
  }
};
