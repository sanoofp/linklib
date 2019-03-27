import { ADD_LINK, GET_USER_LINKS } from '../actions/types';
import axios from "axios";
import { axiosHeader } from "../functions/helper";
import { snackbarToggle } from "../actions/appStateAction";

export const addLink = ({ linkTitle, url }) => (dispatch, getState) => {
  const body =  JSON.stringify({ linkTitle, url });
  
  axios.post("/api/link", body, axiosHeader(getState))
    .then(res => {
      console.log(res);
      dispatch(snackbarToggle(true, "Signed In", "success"));
    })
}