import {legacy_createStore, combineReducers} from "redux";
import { userReducer } from "./User/user.reducers";

const rootReducer = combineReducers({
    user: userReducer
});

export const store = legacy_createStore(rootReducer);