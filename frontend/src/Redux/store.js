import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux";
import { userReducer } from "./User/user.reducers";
import { profileReducer } from "./Profiles/profile.reducers";
import { successStoriesReducer } from "./SuccessStories/successStories.reducers";
import { successVideosReducer } from "./SuccessVideos/successVideos.reducers";
import {thunk} from 'redux-thunk';
import { devToolsEnhancer } from '@redux-devtools/extension';

// const initialState = {};
// const middleware = [thunk];

// logger middleware
const logger = (state) => (next) => (action) =>{

    if(typeof action == 'function'){
        return action(state.dispatch, state.getState);
    }
    return next(action);
}

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// combine all reducers
const rootReducer = combineReducers({
    user: userReducer,
    profile:profileReducer,
    // successStories:successStoriesReducer,
    successVideos:successVideosReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(logger)); 



