import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  ON_CHANGE_INPUT,
} from "./searchType";
import { fetchSerchQueryFromApi } from "../../service/searchApi";
import { fetchCommentFromApi } from "../../service/commentApi";

const fetchSearchRequest = () => {
  return {
    type: FETCH_SEARCH_REQUEST,
  };
};
const fetchSearchSuccess = (user) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: user,
  };
};

const fetchSearchFailure = (error) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENT_REQUEST,
  };
};
const fetchCommentSuccess = (user) => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: user,
  };
};

const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error,
  };
};
const onChangeInput = (value) => {
  return { type: ON_CHANGE_INPUT, payload: value };
};

export const fetchCommentDetail = (objectId) => {
  return async (dispatch) => {
    dispatch(fetchCommentRequest());
    try {
      const queryData = await fetchCommentFromApi(`/items/${objectId}`);
      const result = queryData.data;

      if (result) {
        dispatch(fetchCommentSuccess(result));
      }
    } catch (error) {
      const err = error.message;
      dispatch(fetchCommentFailure(err));
    }
  };
};

export const fetchSerchQueryData = (query = "") => {
  return async (dispatch) => {
    dispatch(onChangeInput(query));
    if (query.length > 0) {
      dispatch(fetchSearchRequest());
      try {
        const queryData = await fetchSerchQueryFromApi("/search", query);
        const result = queryData.data;

        if (result.hits) {
          dispatch(fetchSearchSuccess(result.hits));
        }
      } catch (error) {
        const err = error.message;
        dispatch(fetchSearchFailure(err));
      }
    }

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then( response=>{
    //         const user = response.data;
    // })
    // .catch((err)=>{

    // })
  };
};
