import { SHOW_PHONE_CARD } from "../constants/action-types.js";


const defaultState = {
  hidden: false
};

export function showPhoneCard(state = defaultState, action) {
  switch (action.type) {
    case SHOW_PHONE_CARD:
      return Object.assign({}, state, { hidden: action.payload });
    default:
      return state;
  }
}

