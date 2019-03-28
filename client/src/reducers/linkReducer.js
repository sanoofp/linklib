import { ADD_LINK, GET_USER_LINKS } from '../actions/types';

const initialState = {
  linkLoading: false,
  userLinks: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_LINK: {
      return {
        ...state
      }
    }
    case GET_USER_LINKS: {
      return {
        userLinks: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}