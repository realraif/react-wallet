import {
  DASHBOARD_LOADED,
  DASHBOARD_DESTROYED,
  CREDIT_CARDS_SCREEN_LOADED,
  CREDIT_CARDS_SCREEN_DESTROYED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_LOADED:
      return { ...state, creditCards: action.payload[3].cc };
    case CREDIT_CARDS_SCREEN_LOADED:
      return { ...state, creditCards: action.payload[2].cc };
    case DASHBOARD_DESTROYED:
    case CREDIT_CARDS_SCREEN_DESTROYED:
      return {};
    default:
      return state;
  }
};
