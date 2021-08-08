import api from "./api"

export const fetchSerchQueryFromApi=(endPoint,queryValue)=>{
        return api.get(endPoint,{ params: { query:queryValue} });
}