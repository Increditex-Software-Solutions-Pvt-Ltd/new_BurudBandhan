import api from "../api";
import { CREATE_SUCCESS_STORY_FAIL, CREATE_SUCCESS_STORY_SUCCESS, DELETE_SUCCESS_STORY_FAIL, DELETE_SUCCESS_STORY_SUCCESS, GET_SUCCESS_STORY_FAIL, GET_SUCCESS_STORY_SUCCESS, UPDATE_SUCCESS_STORY_FAIL, UPDATE_SUCCESS_STORY_SUCCESS } from "./successStories.types";

// create success story
export const createSuccessStory = (story)=> async (dispatch) =>{
    try{
        const res = await api.post("/success-stories/create", story);
        dispatch({type:CREATE_SUCCESS_STORY_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_SUCCESS_STORY_FAIL, payload:err.response?.data?.message || "Failed to create success story!"});
    }
}

// get all success stories
export const getAllSuccessStories = () => async(dispatch)=>{
    try{
        const res = await api.get('/success-stories');
        dispatch({type:GET_SUCCESS_STORY_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_SUCCESS_STORY_FAIL, payload:err.response?.data?.message || "Failed to get all success stories!"});
    }
}

// get success story 
export const getSingleSuccessStory = (id) => async(dispatch)=>{
    try{
        const res = await api.get(`/success-stories/${id}`);
        dispatch({type:GET_SUCCESS_STORY_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_SUCCESS_STORY_FAIL, payload:err.response?.data?.message || "Failed to get success story!"});
    }
}

// update success story by id
export const updateSuccessStory = (story, id) => async (dispatch)=>{
    try{
        const res = await api.patch(`/success-stories/${id}`, story);
        dispatch({type:UPDATE_SUCCESS_STORY_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_SUCCESS_STORY_FAIL, payload:err.response?.data?.message || "Failed to update success story!"});
    }
}

// delete success story by id
export const deleteSuccessStory = (id) => async (dispatch)=>{
    try{
        const res = await api.delete(`/success-stories/${id}`);
        dispatch({type:DELETE_SUCCESS_STORY_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_SUCCESS_STORY_FAIL, payload:err.response?.data?.message || "Failed to delete success story!"});
    }
}