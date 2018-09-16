import axios from "axios";
import { GET_DATA_PHONES } from "../constants/action-types.js"

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