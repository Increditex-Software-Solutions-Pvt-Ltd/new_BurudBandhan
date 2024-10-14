import api from "../api"
import { CREATE_PROFILE_FAIL, CREATE_PROFILE_SUCCESS, DELETE_PROFILE_FAIL, DELETE_PROFILE_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS } from "./profile.types";

// create user profile for marriage
export const createUserProfile = (profile)=> async (dispatch) =>{
    try{
        const res = await api.post("", profile);
        dispatch({type:CREATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// get all user marriage profile
export const getAllUserProfile = () => async(dispatch)=>{
    try{
        const res = await api.get(``);
        dispatch({type:GET_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// get user marriage profile
export const getUserProfile = (userId) => async(dispatch)=>{
    try{
        const res = await api.get(`${userId}`);
        dispatch({type:GET_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
    }
}

// update user marriage profile by id
export const updateUserProfile = (profileData) => async (dispatch)=>{
    try{
        const res = await api.patch("", profileData);
        dispatch({type:UPDATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to update user marriage profile!"});
    }
}

// delete user marriage profile by id
export const deleteUserProfile = (userId) => async (dispatch)=>{
    try{
        const res = await api.delete(`${userId}`);
        dispatch({type:DELETE_PROFILE_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to delete profile!"});
    }
}