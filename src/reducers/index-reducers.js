import { GET_DATA_PHONES } from "../constants/action-types";
// import { OPEN_PHONE_MODAL } from "../constants/action-types";
import { ActionTypes } from '../constants/action-types.js';


let defaultState = {
  phones: [],
  modalType: null,
  modalProps: {}
  // phoneModal: {
  //   isOpen: false
  // }
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_PHONES:
      return { ...state, phones: state.phones.concat(action.payload) };
    default:
      return state;


    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case ActionTypes.HIDE_MODAL:
      return defaultState
    // default:
    //   return state
  }

}

// const initialState = {
//   modalType: null,
//   modalProps: {}
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.SHOW_MODAL:
//       return {
//         modalProps: action.modalProps,
//         modalType: action.modalType,
//         type: action.type
//       }
//     case ActionTypes.HIDE_MODAL:
//       return initialState
//     default:
//       return state
//   }
// }

// // const phoneModalReducer = (state = defaultState = { isOpen: false }, action) => {
// //   switch (action.type) {
// //     case OPEN_PHONE_MODAL:
// //       return {
// //         isOpen: true,
// //         phoneId: action.phoneId
// //       };
// //     default:
// //       return state;
// //   }
// // };



export default { mainReducer, phoneModalReducer };
// export default mainReducer;