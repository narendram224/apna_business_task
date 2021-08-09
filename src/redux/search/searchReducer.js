import produce from "immer";
import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  ON_CHANGE_INPUT,
} from "./searchType";
const initialState = {
  loading: { query: false, comment: false },
  searchQuery: "",
  searchResult: [],
  commentsDetails: [],
  initial: true,
  error: { query: "", comment: "" },
};

const SearchReducer = produce((draft = initialState, action) => {
  switch (action.type) {
// runs when searchinput changed 

    case ON_CHANGE_INPUT:
      if (action.payload.length === 0) {
        draft.searchQuery = "";
        draft.searchResult = [];
        draft.loading.query = false;
        draft.error.query = false;
        draft.commentsDetails = [];
        draft.error.comments = [];
      } else {
        draft.searchQuery = action.payload;
      }
      return draft;
// runs while request of fetching search

    case FETCH_SEARCH_REQUEST:
      draft.loading.query = true;
      draft.error.query = "";
      return draft;
// runs while got success of fetching search

    case FETCH_SEARCH_SUCCESS:
      draft.loading.query = false;
      draft.initial = false;
      draft.searchResult = action.payload;
      return draft;
// runs while got error of fetching search
    case FETCH_SEARCH_FAILURE:
      draft.loading.query = false;
      draft.error.query = action.payload;
      draft.searchResult = [];
      return draft;
// runs while request of fetching commets
    case FETCH_COMMENT_REQUEST:
      draft.loading.comment = true;
      draft.error.comment = "";
      return draft;
// runs while got success of fetching commets
    case FETCH_COMMENT_SUCCESS:
      draft.loading.comment = false;
      draft.error.comment = "";

      draft.commentsDetails = action.payload;
      return draft;
// runs while got error of fetching commets
    case FETCH_COMMENT_FAILURE:
      draft.loading.comment = false;
      draft.error.comment = action.payload;
      return draft;
// default value
    default:
      return draft;
  }
});

export default SearchReducer;
