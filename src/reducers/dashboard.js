import {
  DASHBOARD_LOADED,
  DASHBOARD_DESTROYED,
  CARD_SELECTED,
} from "constants/actionTypes";

//state = {selectedCard}

export default (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_LOADED:
      return {
        ...state,
        map: action.payload[0].map,
        bar: action.payload[1].bar,
      };
    case DASHBOARD_DESTROYED:
      return {};
    case CARD_SELECTED:
      return {
        ...state,
        selectedCard: action.selectedCard,
      };
    default:
      return state;
  }
};
