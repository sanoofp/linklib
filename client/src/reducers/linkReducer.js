import { ADD_LINK, GET_USER_LINKS } from '../actions/types';

const initialState = {
  userLinks: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_LINK: {
      return {
        ...state
      }
    }
    default:
      return {
        ...state
      }
  }
}