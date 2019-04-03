import {
  SET_SINGLE_LINKS,
  GET_USER_LINKS,
  LOAD_LINK,
  LOAD_LINK_FAIL,
  CLEAR_SINGLE_LINKS,
  SET_SEARCH_KEYWORD
} from "../actions/types";
import axios from "axios";
import { axiosHeader } from "../functions/helper";
import { snackbarToggle, dialogAction } from "../actions/appStateAction";
import { getErrors } from "../actions/errorAction";
import { returnParaStringOnly } from "../functions/helper";

export const addLink = ({ linkTitle, url }) => (dispatch, getState) => {
  const body = JSON.stringify({ linkTitle, url });
  dispatch({ type: LOAD_LINK });
  axios
    .post("/api/link", body, axiosHeader(getState))
    .then(res => {
      dispatch(getUserLink());
      dispatch(dialogAction("addLinkDialogOpen", false));
      dispatch(
        snackbarToggle(true, `${res.data.linkTitle} - Link added`, "success")
      );
    })
    .catch(err => {
      dispatch({ type: LOAD_LINK_FAIL })
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const getUserLink = () => (dispatch, getState) => {
  const userID = getState().authReducer.user._id;
  dispatch({ type: LOAD_LINK });
  axios
    .get(`/api/link/${userID}`, axiosHeader(getState))
    .then(res => {
      dispatch({
        type: GET_USER_LINKS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: LOAD_LINK_FAIL });      
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const getSingleLink = id => (dispatch, getState) => {
  dispatch({ type: LOAD_LINK });
  axios
    .get(`/api/link/single/${id}`)
    .then(res => {
      dispatch({
        type: SET_SINGLE_LINKS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: CLEAR_SINGLE_LINKS });
      dispatch(
        getErrors(err.response.data, err.response.status, "SINGLE_LINK_ERR")
      );
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const clearSingleLink = () => {
  return {
    type: CLEAR_SINGLE_LINKS
  };
};

export const deleteSingleLink = id => (dispatch, getState) => {
  dispatch({ type: LOAD_LINK });
  axios
    .delete(`/api/link/${id}`, axiosHeader(getState))
    .then(data => {
      dispatch(getUserLink());
      dispatch(snackbarToggle(true, "Link Deleted", "success"));
    })
    .catch(err => {
      dispatch({ type: LOAD_LINK_FAIL });      
      dispatch(
        snackbarToggle(true, "Failed to Delete link. Try again", "error")
      );
    });
};

export const searchLink = keyword => {
  return {
    type: SET_SEARCH_KEYWORD,
    payload: {
      searchKeyword: keyword
    }
  }
}
