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
            
            // get videos (either all or a specific video)
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
                    loading:false,
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