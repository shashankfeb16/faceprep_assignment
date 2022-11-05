import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { Reducer as userReducer } from "./userReducer/reducer";
import {Reducer as dataReducer} from "./dataReducer/reducer"


const rootReducer = combineReducers({
  user: userReducer,
  data:dataReducer
 
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));