import {
  ADD_LINK,
  GET_USER_LINKS,
  SET_SINGLE_LINKS,
  LOAD_LINK,
  LOAD_LINK_FAIL,
  CLEAR_SINGLE_LINKS,
  CLEAR_USER_LINKS,
  SET_SEARCH_KEYWORD,
  SET_GLOBAL_SEARCH_RESULT,
  SEARCH_LINK_LOAD
} from "../actions/types";

const initialState = {
  linkLoading: false,
  userLinks: [],
  userLinksLoaded: false,
  singleLink: [],
  searchKeyword: "",
  globalSearchResult: [],
  searchLinkLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK: {
      return {
        ...state
      };
    }
    case LOAD_LINK: {
      return {
        ...state,
        linkLoading: true
      };
    }
    case LOAD_LINK_FAIL: {
      return {
        ...state,
        linkLoading: false
      }
    }
    case GET_USER_LINKS: {
      return {
        ...state,
        linkLoading: false,
        userLinksLoaded: true,
        userLinks: action.payload
      };
    }
    case SET_SINGLE_LINKS: {
      return {
        ...state,
        linkLoading: false,
        singleLink: action.payload,
      };
    }
    case CLEAR_SINGLE_LINKS: {
      return {
        ...state,
        linkLoading: false,
        singleLink: [],
      };
    }
    case CLEAR_USER_LINKS: {
      return {
        ...state,
        linkLoading: false,
        userLinks: [],
        userLinksLoaded: false,        
      }
    }
    case SET_SEARCH_KEYWORD: {
      return {
        ...state,
        searchKeyword: action.payload.searchKeyword
      }
    }
    case SEARCH_LINK_LOAD: {
      return {
        ...state,
        searchLinkLoading: true
      }
    }
    case SET_GLOBAL_SEARCH_RESULT: {
      return {
        ...state,
        searchLinkLoading: false,
        globalSearchResult: action.payload.globalSearchResult
      }
    }
    default:
      return {
        ...state
      };
  }
}
