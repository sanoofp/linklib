import { ADD_LINK, GET_USER_LINKS, SET_SINGLE_LINKS, LOAD_LINK, CLEAR_SINGLE_LINKS } from '../actions/types';

const initialState = {
  linkLoading: false,
  userLinks: [],
  singleLink: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_LINK: {
      return {
        ...state
      }
    }
    case LOAD_LINK: {
      return {
        ...state,
        linkLoading: true
      }
    }
    case GET_USER_LINKS: {
      return {
        ...state,
        linkLoading: false,
        userLinks: action.payload
      }
    }
    case SET_SINGLE_LINKS: {
      return {
        ...state,
        linkLoading: false,
        singleLink: action.payload
      }
    }
    case CLEAR_SINGLE_LINKS: {
      return {
        ...state,
        linkLoading: false,        
        singleLink: []
      }
    }
    default:
      return {
        ...state
      }
  }
}