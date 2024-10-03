import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import successStoryReducer from "./successStorySlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        successStories: successStoryReducer
    }
});

export default store;