import { CREATE_PROFILE_FAIL, CREATE_PROFILE_SUCCESS, DELETE_PROFILE_FAIL, DELETE_PROFILE_SUCCESS, GET_PROFILE_BY_PROFILEID_FAIL, GET_PROFILE_BY_PROFILEID_SUCCESS, GET_PROFILE_BY_USERID_FAIL, GET_PROFILE_BY_USERID_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS } from "./profile.types";

const iniState = {
    profiles:[],
    myprofile:null,
    profile:null,
    loading:true,
    error:null,
    message:null 
}

export const profileReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // create profile
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                profile:payload,
                loading:false,
                error:null,
                message:"Profile created successfully."
            };
        
            case CREATE_PROFILE_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get all profiles
            case GET_PROFILE_SUCCESS:
                return {
                    ...state,
                    profiles: Array.isArray(payload)?payload:state.profiles,
                    loading:false,
                    error:null
                };
            case GET_PROFILE_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get profile by user id (my profile)
            case GET_PROFILE_BY_USERID_SUCCESS:
                
                return {
                    ...state,
                    myprofile: !Array.isArray(payload)?payload:state.profile,
                    loading:false,
                    error:null
                };
            case GET_PROFILE_BY_USERID_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
                // get profile by profile id
            case GET_PROFILE_BY_PROFILEID_SUCCESS:
                return {
                    ...state,
                    profile: !Array.isArray(payload)?payload:state.profile,
                    loading:false,
                    error:null
                };
            case GET_PROFILE_BY_PROFILEID_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            
            // update profile
            case UPDATE_PROFILE_SUCCESS:
                return {
                    ...state,
                    profile:{...state.profile, ...payload},
                    loading:false,
                    error:null,
                    message:"Profile updated successfully."
                };
            case UPDATE_PROFILE_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // delete profile
            case DELETE_PROFILE_SUCCESS:
                return {
                    ...state,
                    profile:null,
                    profiles:state.profiles.filter((p)=>p.id !== payload.id),
                    loading:false,
                    error:null,
                    message:payload
                };
            case DELETE_PROFILE_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
        // default case
        default:{
            return state;
        }
    }
}