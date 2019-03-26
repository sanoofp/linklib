import {
  HANDLE_DRAWER_STATE,
  TOGGLE_DARK_THEME,
  HANDLE_DIALOG_STATE,
  SNACKBAR_TOGGLE
} from "../actions/types";

const initalState = {
  drawerIsOpen: false,
  darkTheme: false,
  signInDialogOpen: false,
  signUpDialogOpen: false,
  snackbar: {
    open: false,
    msg: "",
    type: ""
  }
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
    case SNACKBAR_TOGGLE: {
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: action.payload.open,
          msg: action.payload.msg,
          type: action.payload.type    
        }
      }
    }
    default:
      return state;
  }
}
