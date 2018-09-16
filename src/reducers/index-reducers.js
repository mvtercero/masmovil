import { GET_DATA_PHONES } from "../constants/action-types";


let defaultState = {
  phones: []
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_PHONES:
      return { ...state, phones: state.phones.concat(action.payload) };
    default:
      return state;
  }
}



export default mainReducer;