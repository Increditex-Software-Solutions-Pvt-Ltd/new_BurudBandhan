import { CREATE_SUCCESS_STORY_FAIL, CREATE_SUCCESS_STORY_SUCCESS, DELETE_SUCCESS_STORY_FAIL, DELETE_SUCCESS_STORY_SUCCESS, GET_SUCCESS_STORY_FAIL, GET_SUCCESS_STORY_SUCCESS, UPDATE_SUCCESS_STORY_FAIL, UPDATE_SUCCESS_STORY_SUCCESS } from "./successStories.types";

const iniState = {
    stories:[],
    story:null,
    loading:true,
    error:null,
    message:null 
}

export const successStoriesReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // create success story
        case CREATE_SUCCESS_STORY_SUCCESS:
            return {
                ...state,
                story:payload,
                loading:false,
                error:null,
                message:"Story added successfully."
            };
        
            case CREATE_SUCCESS_STORY_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get Story (either all or a specific story)
            case GET_SUCCESS_STORY_SUCCESS:
                return {
                    ...state,
                    stories: Array.isArray(payload)?payload:state.stories,
                    story: !Array.isArray(payload)?payload:state.story,
                    loading:false,
                    error:null
                };
            case GET_SUCCESS_STORY_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // update success story
            case UPDATE_SUCCESS_STORY_SUCCESS:
                return {
                    ...state,
                    story:{...state.story, ...payload},
                    loading:false,
                    error:null,
                    message:"Story updated successfully."
                };
            case UPDATE_SUCCESS_STORY_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // delete success story
            case DELETE_SUCCESS_STORY_SUCCESS:
                return {
                    ...state,
                    story:null,
                    stories:state.stories.filter((s)=>s.id !== payload.id),
                    loading:false,
                    error:null,
                    message:payload
                };
            case DELETE_SUCCESS_STORY_FAIL:
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