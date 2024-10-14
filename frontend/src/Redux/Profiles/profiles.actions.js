import api from "../api"
import { CREATE_PROFILE_FAIL, CREATE_PROFILE_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS } from "./profile.types";

// create user profile for marriage
export const createUserProfile = (profile)=> async (dispatch) =>{
    try{
        const res = await api.post("", profile);
        dispatch({type:CREATE_PROFILE_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:CREATE_PROFILE_FAIL, payload:err.response?.data?.message || "Failed to create profile!"});
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
// delete user marriage profile by id