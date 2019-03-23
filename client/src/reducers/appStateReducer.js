import {
  HANDLE_DRAWER_STATE,
  TOGGLE_DARK_THEME,
  HANDLE_DIALOG_STATE
} from "../actions/types";

const initalState = {
  drawerIsOpen: false,
  darkTheme: false,
  signInDialogOpen: false,
  signUpDialogOpen: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case HANDLE_DRAWER_STATE:
      return {
        ...state,
        drawerIsOpen: action.payload.drawerState
      };
    case TOGGLE_DARK_THEME: {
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    }
    case HANDLE_DIALOG_STATE: {
      return {
        ...state,
        [action.payload.dialogType]: action.payload.dialogState
      };
    }
    default:
      return state;
  }
}
