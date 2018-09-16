import { GET_DATA_PHONES } from "../constants/action-types";
import { OPEN_PHONE_MODAL } from "../constants/action-types";


let defaultState = {
  phones: [],
  phoneModal: {
    isOpen: false
  }
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_PHONES:
      return { ...state, phones: state.phones.concat(action.payload) };
    default:
      return state;
  }


}

const phoneModalReducer = (state = defaultState = { isOpen: false }, action) => {
  switch (action.type) {
    case OPEN_PHONE_MODAL:
      return {
        isOpen: true,
        phoneId: action.phoneId
      };
    default:
      return state;
  }
};



export default { mainReducer, phoneModalReducer };