import {
  HANDLE_DRAWER_STATE,
  TOGGLE_DARK_THEME,
  HANDLE_DIALOG_STATE,
  SNACKBAR_TOGGLE,
  REQUEST_LOADING,
  CLIPBOARD_STATE
} from "../actions/types";

const initalState = {
  drawerIsOpen: false,
  darkTheme: false,
  signInDialogOpen: false,
  signUpDialogOpen: false,
  addLinkDialogOpen: false,
  editLinkDialogOpen: false,
  sentLinkDialogOpen: false,
  snackbar: {
    open: false,
    msg: "",
    type: ""
  },
  reqLoading: false,
  clipboard: {
    foundUrl: false,
    urlFromClipboard: ""
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
          open: action.payload.open,
          msg: action.payload.msg,
          type: action.payload.type
        }
      };
    }
    case REQUEST_LOADING: {
      return {
        ...state,
        reqLoading: action.payload.loading
      };
    }
    case CLIPBOARD_STATE: {
      return {
        ...state,
        clipboard: {
          foundUrl: action.payload.foundUrl,
          urlFromClipboard: action.payload.urlFromClipboard
        }
      };
    }
    default:
      return state;
  }
}
