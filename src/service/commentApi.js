import api from "./api";

export const fetchCommentFromApi = (endpoint) => {
    console.log("engpoi",endpoint);
    return api.get(endpoint);

}