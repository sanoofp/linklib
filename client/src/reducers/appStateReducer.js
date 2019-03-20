import { HANDLE_DRAWER_STATE, TOGGLE_DARK_THEME } from "../actions/types";

const initalState = {
  drawerIsOpen: false,
  darkTheme: false  
};

export default function(state = initalState, action) {
  switch (action.type) {
    case HANDLE_DRAWER_STATE:
      return {
        ...state,
        drawerIsOpen: action.payload.drawerState,
      };
    case TOGGLE_DARK_THEME:
      return {
        ...state,       
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
}
