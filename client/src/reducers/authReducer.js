import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT_SUCCESS
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("linklib-token"),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case USER_LOADED: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user
      };
    }
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      localStorage.setItem("linklib-token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    }
    case SIGNIN_FAIL:
    case SIGNUP_FAIL:
    case SIGNOUT_SUCCESS:
    case AUTH_ERROR: {
      localStorage.removeItem("linklib-token");
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
        isAuthenticated: false
      };
    }
    default:
      return state;
  }
}
