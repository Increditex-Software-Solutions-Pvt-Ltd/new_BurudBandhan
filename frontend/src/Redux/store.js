import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import { userReducer } from "./User/user.reducers";
import { profileReducer } from "./Profiles/profile.reducers";
import { successStoriesReducer } from "./SuccessStories/successStories.reducers";
import { successVideosReducer } from "./SuccessVideos/successVideos.reducers";


const reducers = combineReducers({
    user: userReducer,
    profile:profileReducer,
    successStories:successStoriesReducer,
    successVideos:successVideosReducer
})

export const store = legacy_createStore(reducers)


