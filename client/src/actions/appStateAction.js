import {
  HANDLE_DRAWER_STATE,
  TOGGLE_DARK_THEME,
  HANDLE_DIALOG_STATE,
  SNACKBAR_TOGGLE,
  REQUEST_LOADING,
  CLIPBOARD_STATE
} from "./types";

export const toggleDrawer = drawerState => {
  return {
    type: HANDLE_DRAWER_STATE,
    payload: {
      drawerState
    }
  };
};

export const toggleDarkTheme = () => {
  return {
    type: TOGGLE_DARK_THEME
  };
};

export const dialogAction = (dialogType, dialogState) => {
  return {
    type: HANDLE_DIALOG_STATE,
    payload: {
      dialogType: dialogType,
      dialogState: dialogState
    }
  };
};

export const snackbarToggle = (open, msg = "", type = "") => {
  return {
    type: SNACKBAR_TOGGLE,
    payload: {
      open,
      msg,
      type
    }
  };
};

export const toggleLoading = loading => {
  return {
    type: REQUEST_LOADING,
    payload: {
      loading
    }
  };
};

export const clipboardState = (
  foundUrl,
  urlFromClipboard,
  clearClipboard = false
) => {
  if (clearClipboard) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("");
    }
  }

  return {
    type: CLIPBOARD_STATE,
    payload: {
      foundUrl: foundUrl,
      urlFromClipboard: urlFromClipboard
    }
  };
};
