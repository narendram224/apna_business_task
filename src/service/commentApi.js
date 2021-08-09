import api from "./api";

export const fetchCommentFromApi = (endpoint) => {
    return api.get(endpoint);

}