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
  SEARCH_LINK_LOAD,
  SET_EDIT_LINK,
  CLEAR_EDIT_LINK,
  SET_SINGLE_LINK_DETAILS,
  SET_SENTLINK_DETAILS,
  SET_LINK_SENT_STATUS
} from "../actions/types";

const initialState = {
  linkLoading: false,
  userLinks: [],
  userLinksLoaded: false,
  singleLink: [],
  singleLinkDetails: {},
  searchKeyword: { text: "", type: "Title" },
  globalSearchResult: [],
  searchLinkLoading: false,
  editLink: {},
  sentLink: { 
    users: [],
    selectedUser: "", 
    linkID: ""
  },
  linkSend: false
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
      };
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
        singleLink: action.payload
      };
    }
    case SET_SINGLE_LINK_DETAILS: {
      return {
        ...state,
        singleLinkDetails: action.payload
      };
    }
    case CLEAR_SINGLE_LINKS: {
      return {
        ...state,
        linkLoading: false,
        singleLink: []
      };
    }
    case CLEAR_USER_LINKS: {
      return {
        ...state,
        linkLoading: false,
        userLinksLoaded: false,
        userLinks: []
      };
    }
    case SET_SEARCH_KEYWORD: {
      return {
        ...state,
        searchKeyword: action.payload.searchKeyword
      };
    }
    case SEARCH_LINK_LOAD: {
      return {
        ...state,
        searchLinkLoading: true
      };
    }
    case SET_GLOBAL_SEARCH_RESULT: {
      return {
        ...state,
        searchLinkLoading: false,
        globalSearchResult: action.payload.globalSearchResult
      };
    }
    case SET_EDIT_LINK: {
      return {
        ...state,
        editLink: action.payload
      };
    }
    case CLEAR_EDIT_LINK: {
      return {
        ...state,
        editLink: {}
      };
    }
    case SET_SENTLINK_DETAILS: {
      return {
        ...state,
        sentLink: {
          users: action.users ? action.users : state.sentLink.users,
          linkID: action.linkID ? action.linkID : state.sentLink.linkID
        }
      }
    }
    case SET_LINK_SENT_STATUS: {
      return {
        ...state,
        linkSend: action.payload
      }
    }
    default:
      return {
        ...state
      };
  }
}
