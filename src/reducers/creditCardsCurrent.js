import { DASHBOARD_LOADED, DASHBOARD_DESTROYED } from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_LOADED:
      return { ...state, creditCards: action.payload[3].cc };
    case DASHBOARD_DESTROYED:
      return {};
    default:
      return state;
  }
};
