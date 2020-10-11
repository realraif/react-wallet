import {
  DASHBOARD_LOADED,
  DASHBOARD_DESTROYED,
  CARD_SELECTED,
} from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_LOADED:
      return {
        ...state,
        map: action.payload[0].map,
        bar: action.payload[1].bar,
      };
    case CARD_SELECTED:
      return {
        ...state,
        selectedCard: action.selectedCard,
      };
    case DASHBOARD_DESTROYED:
      return {};
    default:
      return state;
  }
};
