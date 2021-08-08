import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS , FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE } from "./searchType"
import Axios from "axios"
import { fetchSerchQueryFromApi } from "../../service/searchApi"


const fetchSearchRequest = ()=>{
    return {
        type:FETCH_SEARCH_REQUEST
    }
}
 const fetchSearchSuccess = user=>{
        return {
            type:FETCH_SEARCH_SUCCESS,
            payload:user
        }
}   

 const fetchSearchFailure = error=>{
    return {
        type:FETCH_SEARCH_FAILURE,
        payload:error
    }
}

 const fetchCommentRequest = ()=>{
    return {
        type:FETCH_COMMENT_REQUEST
    }
}
 const fetchCommentSuccess = user=>{
        return {
            type:FETCH_COMMENT_SUCCESS,
            payload:user
        }
}   

 const fetchCommentFailure = error=>{
    return {
        type:FETCH_COMMENT_FAILURE,
        payload:error
    }
}

export const fetchCommentDetail = ()=>{
    return (dispatch)=>{
            dispatch(fetchCommentRequest());
            fetch("https://hn.algolia.com/api/v1/items/5218288")
            .then((resp)=>{resp.json()})
            .then( response=>{
                    const commentDetails = response;
                    dispatch(fetchCommentSuccess(commentDetails))
            })
            .catch((err)=>{
                const error = err.message;
                dispatch(fetchCommentFailure((error)))
            })
    }
}

export const fetchSerchQueryData = (query)=>{
    return async(dispatch)=>{
            dispatch(fetchSearchRequest());
            try {
                const queryData = await fetchSerchQueryFromApi('/search',query);
                dispatch(fetchSearchSuccess(queryData.data))

            } catch (error) {
                const err = error.message;
                dispatch(fetchSearchFailure((err)))
            }
            // fetch("https://jsonplaceholder.typicode.com/users")
            // .then( response=>{
            //         const user = response.data;
            // })
            // .catch((err)=>{
                
            // })
    }
}