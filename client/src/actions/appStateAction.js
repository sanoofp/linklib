import { HANDLE_DRAWER_STATE } from './types';

export const toggleDrawer = drawerState => {
  return {
    type: HANDLE_DRAWER_STATE,
    payload: {
      drawerState
    }
  }
}