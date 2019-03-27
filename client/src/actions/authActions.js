import axios from "axios";
import { returnParaStringOnly } from "../functions/helper";
import { getErrors } from "./errorAction";
import { snackbarToggle, toggleLoading } from "./appStateAction";
import { 
  USER_LOADED, USER_LOADING, AUTH_ERROR,
  SIGNIN_SUCCESS, SIGNIN_FAIL,
  SIGNUP_SUCCESS, SIGNUP_FAIL,
  SIGNOUT_SUCCESS
} from "../actions/types";

const axiosHeader = getState => {
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  if(token) { 
    config.headers["x-auth-token"] = token;
  }
  return config;
}

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
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
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
    dispatch(toggleLoading(false))
  })
  .catch(err => {
    dispatch(toggleLoading(false))
    dispatch({ type: SIGNUP_FAIL })
    dispatch(getErrors(err.response.data, err.response.status, "SIGNUP_FAIL"))
    dispatch(snackbarToggle(true, returnParaStringOnly(err.response.data), "error"))
  });
}