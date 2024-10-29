import api from "../api"
import { CREATE_PROFILE_FAIL, 
    CREATE_PROFILE_SUCCESS, 
    DELETE_PROFILE_FAIL, 
    DELETE_PROFILE_SUCCESS, 
    GET_PROFILE_BY_PROFILEID_FAIL, 
    GET_PROFILE_BY_PROFILEID_SUCCESS, 
    GET_PROFILE_BY_SEARCH_FAIL, 
    GET_PROFILE_BY_SEARCH_SUCCESS, 
    GET_PROFILE_BY_USERID_FAIL, 
    GET_PROFILE_BY_USERID_SUCCESS, 
    GET_PROFILE_FAIL, 
    GET_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL, 
    UPDATE_PROFILE_SUCCESS } from "./profile.types";

// create marriage profile for marriage
export const createMarriageProfile = (profile)=> async (dispatch) =>{
    try{
        const res = await api.post("/marriage-profile/create", profile);
        dispatch({type:CREATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// get all user marriage profiles
export const getAllMarriageProfiles = () => async(dispatch)=>{
    try{
        const res = await api.get('/marriage-profile');
        dispatch({type:GET_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to get profiles!"});
    }
}

// get marriage profiles by search
export const getMarriageProfilesBySearch = (query) => async(dispatch)=>{
    try{
        const res = await api.get(`/marriage-profile/search?query=${query}`);
        dispatch({type:GET_PROFILE_BY_SEARCH_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_BY_SEARCH_FAIL, payload:err.response?.data?.message || "Failed to get profiles!"});
    }
}

// get user marriage profile by user id
export const getMarriageProfileByUserId = () => async(dispatch)=>{
    try{
        const res = await api.get(`/marriage-profile/my-profile`);
        
        dispatch({type:GET_PROFILE_BY_USERID_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_BY_USERID_FAIL, payload:err.response?.data?.message || "Failed to get profile!"});
    }
}

// get user marriage profile by profile id
export const getMarriageProfileByProfileId = (profileId) => async(dispatch)=>{
    try{
        const res = await api.get(`/marriage-profile/${profileId}`);
        // console.log(res);
        dispatch({type:GET_PROFILE_BY_PROFILEID_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_BY_PROFILEID_FAIL, payload:err.response?.data?.message || "Failed to get profile!"});
    }
}

// update user marriage profile by id
export const updateMarriageProfile = (profileData, profileId) => async (dispatch)=>{
    console.log(profileId, profileData);
    try{
        const res = await api.patch(`/marriage-profile/${profileId}`, profileData);
        dispatch({type:UPDATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to update user marriage profile!"});
    }
}

// delete user marriage profile by id
export const deleteMarriageProfile = (profileId) => async (dispatch)=>{
    try{
        const res = await api.delete(`/marriage-profile/${profileId}`);
        dispatch({type:DELETE_PROFILE_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to delete profile!"});
    }
}