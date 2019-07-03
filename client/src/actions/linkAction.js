import {
  SET_SINGLE_LINKS,
  GET_USER_LINKS,
  LOAD_LINK,
  LOAD_LINK_FAIL,
  CLEAR_SINGLE_LINKS,
  SET_SEARCH_KEYWORD,
  CLEAR_USER_LINKS,
  SET_GLOBAL_SEARCH_RESULT,
  SEARCH_LINK_LOAD,
  SET_EDIT_LINK,
  SET_SINGLE_LINK_DETAILS,
  SET_SENTLINK_DETAILS,
  SET_INCOMING_LINKS
} from "../actions/types";
import axios from "axios";
import { axiosHeader } from "../functions/helper";
import {
  snackbarToggle,
  dialogAction,
  toggleLoading
} from "../actions/appStateAction";
import { getErrors } from "../actions/errorAction";
import { returnParaStringOnly } from "../functions/helper";

export const addLink = ({ linkTitle, url, tags }) => (dispatch, getState) => {
  const body = JSON.stringify({ linkTitle, url, tags });
  // dispatch({ type: LOAD_LINK });
  dispatch(toggleLoading(true));
  axios
    .post("/api/link", body, axiosHeader(getState))
    .then(res => {
      dispatch(getUserLink());
      dispatch(toggleLoading(false));
      dispatch(dialogAction("addLinkDialogOpen", false));
      dispatch(
        snackbarToggle(true, `${res.data.linkTitle} - Link added`, "success")
      );
    })
    .catch(err => {
      dispatch(toggleLoading(false));
      dispatch({ type: LOAD_LINK_FAIL });
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const getUserLink = () => (dispatch, getState) => {
  const userID = getState().authReducer.user._id;
  dispatch({ type: LOAD_LINK });
  axios
    .get(`/api/link/${userID}`, axiosHeader(getState))
    .then(res => {
      dispatch({
        type: GET_USER_LINKS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: LOAD_LINK_FAIL });
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const getSingleLink = id => (dispatch, getState) => {
  dispatch({ type: LOAD_LINK });
  axios
    .get(`/api/link/single/${id}`)
    .then(res => {
      dispatch({
        type: SET_SINGLE_LINKS,
        payload: res.data
      });

      // fetch("https://utilsio.herokuapp.com/api/all", {
      //   method: "POST",
      //   body: {
      //     url: res.data.url
      //   },
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      axios
        .post("https://utilsio.herokuapp.com/api/all", { url: res.data.url })
        .then(res =>
          dispatch({ type: SET_SINGLE_LINK_DETAILS, payload: res.data })
        );
      // axios.post("/api/search/title", { url: res.data.url })
    })
    .catch(err => {
      dispatch({ type: CLEAR_SINGLE_LINKS });
      dispatch(
        getErrors(err.response.data, err.response.status, "SINGLE_LINK_ERR")
      );
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const clearSingleLink = () => dispatch => {
  dispatch({ type: CLEAR_SINGLE_LINKS });
  dispatch({ type: SET_SINGLE_LINK_DETAILS, payload: {} });
};

export const clearUserLinks = () => {
  return {
    type: CLEAR_USER_LINKS
  };
};

export const deleteSingleLink = id => (dispatch, getState) => {
  dispatch({ type: LOAD_LINK });
  axios
    .delete(`/api/link/${id}`, axiosHeader(getState))
    .then(data => {
      dispatch(clearSingleLink());
      dispatch(getUserLink());
      dispatch(snackbarToggle(true, "Link Deleted", "success"));
    })
    .catch(err => {
      dispatch({ type: LOAD_LINK_FAIL });
      dispatch(
        snackbarToggle(true, "Failed to Delete link. Try again", "error")
      );
    });
};

export const editLink = newLink => (dispatch, getState) => {
  dispatch(toggleLoading(true));

  const body = JSON.stringify(newLink);

  axios
    .put(`/api/link/${newLink._id}`, body, axiosHeader(getState))
    .then(link => {
      dispatch(toggleLoading(false));
      dispatch(getUserLink());
      dispatch(setEditLink({}));
      dispatch(snackbarToggle(true, "Link Updated", "success"));
      dispatch(dialogAction("editLinkDialogOpen", false));
    })
    .catch(err => {
      dispatch(toggleLoading(false));
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(
        snackbarToggle(true, returnParaStringOnly(err.response.data), "error")
      );
    });
};

export const setEditLink = link => dispatch => {
  dispatch({ type: SET_EDIT_LINK, payload: link });
};

// Dashboard Search component - user link search
export const searchLink = keyword => {
  return {
    type: SET_SEARCH_KEYWORD,
    payload: {
      searchKeyword: keyword
    }
  };
};

export const searchGlobal = (keyword, maxLength = 5) => dispatch => {
  dispatch({ type: SEARCH_LINK_LOAD });
  // dispatch(toggleLoading(true))
  axios.get(`/api/search?q=${keyword}&max=${maxLength}`).then(searchResult => {
    // dispatch(toggleLoading(false))
    dispatch({
      type: SET_GLOBAL_SEARCH_RESULT,
      payload: {
        globalSearchResult: searchResult.data
      }
    });
  });
};

export const clearGlobalSearch = () => dispatch => {
  dispatch({
    type: SET_GLOBAL_SEARCH_RESULT,
    payload: { globalSearchResult: [] }
  });
};

export const socketEmit = linkID => (dispatch, getState) => {
  dispatch(toggleLoading(true));
  axios
    .get(`/api/notify/trigger/${linkID}`, axiosHeader(getState))
    .then(done => {
      dispatch(
        snackbarToggle(
          true,
          "Notification sent to all current active devices",
          "success"
        )
      );
      dispatch(toggleLoading(false));
    })
    .catch(err => console.log(err));
};


export const searchLLUsername = username => dispatch => {
  dispatch(toggleLoading(true));
  axios.get(`/api/search/user?username=${username}`)
    .then(res => {
      dispatch({
        type: SET_SENTLINK_DETAILS,
        payload: {
          users: res.data
        }
      });
      dispatch(toggleLoading(false))
    })
  } 
  
export const getIncomingLinks = userID => (dispatch, getState) => {
    // const userID = getState().authReducer.user._id;
  dispatch(toggleLoading(true))
  axios.get(`/api/search/incominglinks?userID=${userID}`)
    .then(res => {
      dispatch(toggleLoading(false))
      dispatch({
        type: SET_INCOMING_LINKS,
        payload: res.data
      });
    })
}

export const sentLinkToUserAccount = (link, userID, jobId) => (dispatch, getState) => {
  const newUserLink = {
    linkTitle: link.linkTitle,
    url: link.url,
    tags: link.tags,
    userID: userID
  }
  const body = JSON.stringify(newUserLink);
  console.log(body);
  dispatch(toggleLoading(true))
  axios.post(`/api/sent/transferlink/${jobId}`, body, axiosHeader(getState))
    .then(() => {
      dispatch(getIncomingLinks(userID));
      dispatch(
        snackbarToggle(
          true,
          `${link.linkTitle} has transfered to your dashbooard`,
          "success"
        )
      );
    })
    
}
  
export const rejectLinkRecevieJob = jobId => (dispatch, getState) => {
  const userID = getState().authReducer.user._id;
  dispatch(toggleLoading(true))
  axios.delete(`/api/sent/rejectlink/${jobId}`, axiosHeader(getState))
    .then(() => {
      dispatch(toggleLoading(false));
      dispatch(getIncomingLinks(userID));
      dispatch(
        snackbarToggle(
          true,
          `Link transfer Rejected`,
          "success"
        )
      );
    })

}

export const setSentLink = link => dispatch => {
  dispatch(dialogAction("sentLinkDialogOpen", true));
  dispatch({ type: SET_SENTLINK_DETAILS, payload: { link: link } });
}

export const sentLinkToUser = toUserId => (dispatch, getState) => {
  const sentLink = getState().linkReducer.sentLink;
  const fromUsername = getState().authReducer.user.username;
  const body = JSON.stringify({
    linkID: sentLink.link._id,
    fromUsername: fromUsername
  });
  console.log("FROM :", fromUsername, "TO: ", toUserId, "Link: ", sentLink.link);
  
  dispatch(toggleLoading(true));
  axios.post(`/api/sent/link/${toUserId}`, body, axiosHeader(getState))
    .then(res => {
      dispatch(toggleLoading(false));
      dispatch(dialogAction("sentLinkDialogOpen", false))
      dispatch(
        snackbarToggle(
          true,
          "Link sent success",
          "success"
        )
      );
      dispatch({ type: SET_SENTLINK_DETAILS, payload: { users: {}, link: {} } });
    });
}
