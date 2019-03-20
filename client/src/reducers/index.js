import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import appStateReducer from './appStateReducer';

export default combineReducers({
  settingsReducer: settingsReducer,
  appStateReducer: appStateReducer
});