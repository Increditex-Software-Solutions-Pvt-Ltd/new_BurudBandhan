import api from "../api";
import { CREATE_SUCCESS_VIDEO_FAIL, CREATE_SUCCESS_VIDEO_SUCCESS, DELETE_SUCCESS_VIDEO_FAIL, DELETE_SUCCESS_VIDEO_SUCCESS, GET_SUCCESS_VIDEO_FAIL, GET_SUCCESS_VIDEO_SUCCESS, UPDATE_SUCCESS_VIDEO_FAIL, UPDATE_SUCCESS_VIDEO_SUCCESS } from "./successVideos.types";

// add success video
export const addSuccessVideo = (videoData)=> async (dispatch) =>{
    try{
        const res = await api.post("/success-videos/add", videoData);
        dispatch({type:CREATE_SUCCESS_VIDEO_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_SUCCESS_VIDEO_FAIL, payload:err.response?.data?.message || "Failed to add success video!"});
    }
}

// get all success videos
export const getAllSuccessVideos = () => async(dispatch)=>{
    try{
        const res = await api.get('/success-videos');
        dispatch({type:GET_SUCCESS_VIDEO_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_SUCCESS_VIDEO_FAIL, payload:err.response?.data?.message || "Failed to get all success videos!"});
    }
}

// get single success video by id 
export const getSingleSuccessStory = (id) => async(dispatch)=>{
    try{
        const res = await api.get(`/success-videos/${id}`);
        dispatch({type:GET_SUCCESS_VIDEO_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_SUCCESS_VIDEO_FAIL, payload:err.response?.data?.message || "Failed to get success video!"});
    }
}

// update success video by id
export const updateSuccessVideo = (videoData, id) => async (dispatch)=>{
    try{
        const res = await api.patch(`/success-videos/${id}`, videoData);
        dispatch({type:UPDATE_SUCCESS_VIDEO_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_SUCCESS_VIDEO_FAIL, payload:err.response?.data?.message || "Failed to update success video!"});
    }
}

// delete success video by id
export const deleteSuccessVideo = (id) => async (dispatch)=>{
    try{
        const res = await api.delete(`/success-videos/${id}`);
        dispatch({type:DELETE_SUCCESS_VIDEO_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_SUCCESS_VIDEO_FAIL, payload:err.response?.data?.message || "Failed to delete success video!"});
    }
}