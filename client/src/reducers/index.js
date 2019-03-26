import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  appStateReducer: appStateReducer,
  authReducer: authReducer,
  errorReducer: errorReducer
});
