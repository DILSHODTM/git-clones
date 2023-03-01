import { combineReducers } from "redux";
import { reducer, wishlistReducer ,addToCarTReducer } from "./reducer";

const rootReducer = combineReducers({
  login: reducer,
  like: wishlistReducer,
  cart: addToCarTReducer
})

export default rootReducer