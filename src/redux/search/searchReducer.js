import produce from 'immer'
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS , FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE } from "./searchType";
const initialState ={
    loading:{query:false,comment:false},
    searchQuerty:"",
    serchResult:[],
    commentsDetails:[],
    error:{query:'',comment:''}
}

const SearchReducer = produce((draft=initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            draft.loading.query=true;
            draft.error.query="";

            return draft
        case FETCH_SEARCH_SUCCESS:
            draft.loading.query=true;
            draft.searchResult=action.payload;

        return draftcase

         case FETCH_SEARCH_FAILURE:
            draft.loading.query=true;
            draft.error.query=action.payload;

            return draft
        case FETCH_COMMENT_REQUEST:
            draft.loading.comment=true;
            draft.error.comment="";

            return draft;
        case FETCH_COMMENT_SUCCESS:
            draft.loading.comment=true;
            draft.commentsDetails=action.payload;
            return draft;
        case FETCH_COMMENT_FAILURE:
            draft.loading.comment=true;
            draft.error.comment=action.payload;

            return draft;
        default:
            return state;
    }
})

export default SearchReducer;