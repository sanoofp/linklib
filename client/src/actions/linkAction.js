import { ADD_LINK, GET_USER_LINKS } from '../actions/types';
import axios from "axios";
import { axiosHeader } from "../functions/helper";
import { snackbarToggle } from "../actions/appStateAction";
import { getErrors } from "../actions/errorAction";
import { returnParaStringOnly } from "../functions/helper";

export const addLink = ({ linkTitle, url }) => (dispatch, getState) => {
  const body = JSON.stringify({ linkTitle, url });
  
  axios.post("/api/link", body, axiosHeader(getState))
  .then(res => {
    dispatch(snackbarToggle(true, `${res.data.linkTitle} - Link added`, "success"));
  })
  .catch(err => {
    dispatch(getErrors(err.response.data, err.response.status));
    dispatch(snackbarToggle(true, returnParaStringOnly(err.response.data), "error"))
  });
}

export const getUserLink = () => (dispatch, getState) => {
  const userID = getState().authReducer.user._id;
  axios.get(`/api/link/${userID}`)
    .then(res => {
      dispatch({
        type: GET_USER_LINKS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(snackbarToggle(true, returnParaStringOnly(err.response.data), "error"))
    })
}

export const getSingleLink = (id) => (dispatch, getState) => {
  axios.get(`/api/link/single/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}