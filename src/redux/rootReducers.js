import { combineReducers } from "redux";
import userReducer from "./search/searchReducer";

 const rootReducers = combineReducers({

    user:userReducer
});
export default rootReducers;