import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { Reducer as userReducer } from "./userReducer/reducer";


const rootReducer = combineReducers({
  user: userReducer
 
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));