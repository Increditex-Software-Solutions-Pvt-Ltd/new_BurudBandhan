import { CREATE_PROFILE_FAIL, CREATE_PROFILE_SUCCESS, DELETE_PROFILE_FAIL, DELETE_PROFILE_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS } from "./profile.types";
import { CREATE_SUCCESS_VIDEO_FAIL, CREATE_SUCCESS_VIDEO_SUCCESS, DELETE_SUCCESS_VIDEO_FAIL, DELETE_SUCCESS_VIDEO_SUCCESS, GET_SUCCESS_VIDEO_FAIL, GET_SUCCESS_VIDEO_SUCCESS, UPDATE_SUCCESS_VIDEO_FAIL, UPDATE_SUCCESS_VIDEO_SUCCESS } from "./successVideos.types";

const iniState = {
    videos:[],
    video:null,
    loading:true,
    error:null,
    message:null 
}

export const successVideosReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // add success video
        case CREATE_SUCCESS_VIDEO_SUCCESS:
            return {
                ...state,
                video:payload,
                loading:false,
                error:null,
                message:"Video added successfully."
            };
        
            case CREATE_SUCCESS_VIDEO_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get videos (either all or a specific profile)
            case GET_SUCCESS_VIDEO_SUCCESS:
                return {
                    ...state,
                    videos: Array.isArray(payload)?payload:state.videos,
                    video: !Array.isArray(payload)?payload:state.video,
                    loading:false,
                    error:null
                };
            case GET_SUCCESS_VIDEO_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // update success video
            case UPDATE_SUCCESS_VIDEO_SUCCESS:
                return {
                    ...state,
                    video:{...state.video, ...payload},
                    loading:false,
                    error:null,
                    message:"Video updated successfully."
                };
            case UPDATE_SUCCESS_VIDEO_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // delete success video
            case DELETE_SUCCESS_VIDEO_SUCCESS:
                return {
                    ...state,
                    video:null,
                    videos:state.videos.filter((v)=>v.id !== payload.id),
                    loadind:false,
                    error:null,
                    message:payload
                };
            case DELETE_SUCCESS_VIDEO_FAIL:
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