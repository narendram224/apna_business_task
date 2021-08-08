import { combineReducers } from "redux";
import SearchReducer from "./search/searchReducer";

 const rootReducers = combineReducers({

    search:SearchReducer
});
export default rootReducers;