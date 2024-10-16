import api from "../api"
import { CREATE_PROFILE_FAIL, CREATE_PROFILE_SUCCESS, DELETE_PROFILE_FAIL, DELETE_PROFILE_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS } from "./profile.types";

// create user profile for marriage
export const createUserProfile = (profile)=> async (dispatch) =>{
    try{
        const res = await api.post("/marriage-profile/create", profile);
        dispatch({type:CREATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// get all user marriage profile
export const getAllUserProfiles = () => async(dispatch)=>{
    try{
        const res = await api.get('/marriage-profile');
        dispatch({type:GET_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to get profiles!"});
    }
}

// get user marriage profile
export const getUserProfile = (userId) => async(dispatch)=>{
    try{
        const res = await api.get(`/marriage-profile/${userId}`);
        dispatch({type:GET_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// update user marriage profile by id
export const updateUserProfile = (profileData, profileId) => async (dispatch)=>{
    try{
        const res = await api.patch(`/marriage-profile/${profileId}`, profileData);
        dispatch({type:UPDATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to update user marriage profile!"});
    }
}

// delete user marriage profile by id
export const deleteUserProfile = (profileId) => async (dispatch)=>{
    try{
        const res = await api.delete(`/marriage-profile/${profileId}`);
        dispatch({type:DELETE_PROFILE_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to delete profile!"});
    }
}