import axios from "axios";
import { GET_DATA_PHONES } from "../constants/action-types.js";
import { SHOW_PHONE_CARD } from "../constants/action-types.js";


export function loadAPI() {
  return (dispatch) => {
    return axios.get("http://localhost:3001/phones").then((response) => {
      dispatch(getDataPhones(response.data.phones))
    })
  }
}

export const getDataPhones = data => ({
  type: GET_DATA_PHONES,
  payload: data
})


export const showPhoneCard = event => {
  return (dispatch, getState) => {
    const phoneSelected = event.currentTarget.querySelector(".phone-card").classList.toggle("hidden");
    dispatch({ type: SHOW_PHONE_CARD, payload: phoneSelected });
  };
}


