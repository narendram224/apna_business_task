import produce from 'immer'
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS , FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE,ON_CHANGE_INPUT } from "./searchType";
const initialState ={
    loading:{query:false,comment:false},
    searchQuery:"",
    serchResult:[],
    commentsDetails:[],
    error:{query:'',comment:''}
}

const SearchReducer = produce((draft=initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_INPUT:
            console.log("the ",action.payload);
            if (action.payload.length===0) {
                draft.searchQuery="";
                draft.searchResult=[];
                    draft.loading.query =false;
                    draft.error.query=false;
                    draft.commentsDetails=[];
                    draft.error.comments=[] ;
            }else{
                draft.searchQuery=action.payload;
            }
            return draft;
        case FETCH_SEARCH_REQUEST:
            draft.loading.query=true;
            draft.error.query="";

            return draft
        case FETCH_SEARCH_SUCCESS:
            draft.loading.query=true;
            // searchQuery=
            draft.searchResult=action.payload;

        return draft;

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
            return draft;
    }
})

export default SearchReducer;