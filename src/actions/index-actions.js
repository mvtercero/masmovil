import axios from "axios";
import { GET_DATA_PHONES } from "../constants/action-types.js";
import { ActionTypes } from '../constants/action-types.js';
// import { OPEN_PHONE_MODAL } from "../constants/action-types.js"

export function loadAPI() {
  return (dispatch) => {
    return axios.get("http://localhost:3001/phones").then((response) => {
      console.log(response.data.phones)
      dispatch(getDataPhones(response.data.phones))
    })
  }
}

export const getDataPhones = data => ({
  type: GET_DATA_PHONES,
  payload: data
})

export const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  });
}

// export const openPhoneModal = data => ({
//   type: OPEN_PHONE_MODAL,
//   phoneId: data

// })