import { combineReducers } from "redux";
import shopReducer from "./Shopping/Reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});
export default rootReducer;
