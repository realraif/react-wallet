import {
  BALANCES_SCREEN_LOADED,
  BALANCES_SCREEN_DESTROYED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case BALANCES_SCREEN_LOADED:
      return {
        ...state,
        map: action.payload[0].map,
        bar: action.payload[1].bar,
      };
    case BALANCES_SCREEN_DESTROYED:
      return {};
    default:
      return state;
  }
};
