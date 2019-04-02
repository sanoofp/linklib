import axios from "axios";
import { returnParaStringOnly } from "../functions/helper";
import { getErrors, clearErrors } from "./errorAction";
import { snackbarToggle, toggleLoading, dialogAction } from "./appStateAction";
import { 
  USER_LOADED, USER_LOADING, AUTH_ERROR,
  SIGNIN_SUCCESS, SIGNIN_FAIL,
  SIGNUP_SUCCESS, SIGNUP_FAIL,
  SIGNOUT_SUCCESS
} from "../actions/types";
import { axiosHeader } from '../functions/helper'

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  
  axios.get("/api/user/auth", axiosHeader(getState))
    .then(res => dispatch({ 
      type: USER_LOADED,
      payload: {
        user: res.data
      } 
    }))
    .catch(err => {
      dispatch({
        type: AUTH_ERROR,
      });
      if(err.response) {
        dispatch(getErrors(err.response.data, err.response.status));
      }
    })
}

export const signinUser = ({ username, password }) => dispatch => {
  dispatch(toggleLoading(true));

  const config = { headers: { "Content-Type": "application/json" } };
  const body =  JSON.stringify({ username, password });
    
  axios.post("/api/user/signin", body, config)
  .then(res => {
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: {
        token: res.data.token,
        user: res.data.user
      }
    });
    dispatch(dialogAction("signInDialogOpen", false))
    dispatch(toggleLoading(false));
    dispatch(clearErrors());  
    dispatch(snackbarToggle(true, "Signed In", "success"));
  })
  .catch(err => {
    dispatch(toggleLoading(false));
    dispatch({ type: SIGNIN_FAIL });
    dispatch(getErrors(err.response.data, err.response.status));
    dispatch(snackbarToggle(true, returnParaStringOnly(err.response.data), "error"))    
  })
}

export const signupUser = ({ username, email, password }) => dispatch => {
  dispatch(toggleLoading(true))

  const config = { headers: { "Content-Type": "application/json" } };
  const body =  JSON.stringify({ username, email, password });

  axios.post("/api/user/signup", body, config)
  .then(res => {
    dispatch({ 
      type: SIGNUP_SUCCESS,
      payload: {
        user: res.data.user,
        token: res.data.token
      } 
    });
    dispatch(toggleLoading(false));
    dispatch(clearErrors());
    dispatch(dialogAction("signUpDialogOpen", false));
    dispatch(snackbarToggle(true, `Successfully registered to Linklib.`, "success"));
  })
  .catch(err => {
    dispatch(toggleLoading(false))
    dispatch({ type: SIGNUP_FAIL })
    dispatch(getErrors(err.response.data, err.response.status, "SIGNUP_FAIL"))
    dispatch(snackbarToggle(true, returnParaStringOnly(err.response.data), "error"))
  });
}

export const signOut = () => dispatch => {
  dispatch(snackbarToggle(true, "Signed out of Linklib", "success"))
  dispatch({
    type: SIGNOUT_SUCCESS
  });
}