import { HANDLE_DRAWER_STATE, TOGGLE_DARK_THEME } from "./types";

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
