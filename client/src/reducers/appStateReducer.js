import { HANDLE_DRAWER_STATE } from '../actions/types';

const initalState = {
  drawerIsOpen: false
}

export default function(state = initalState, action) {
  switch(action.type) {
    case HANDLE_DRAWER_STATE:
      return {
        drawerIsOpen: action.payload.drawerState
      }
    default:
      return state;
  }
}