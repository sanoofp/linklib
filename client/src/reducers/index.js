import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import linkReducer from "./linkReducer";

export default combineReducers({
  appStateReducer,
  authReducer,
  errorReducer,
  linkReducer
});
