import { ADD_ABOUTUS_FAIL, ADD_ABOUTUS_SUCCESS, DELETE_ABOUTUS_FAIL, DELETE_ABOUTUS_SUCCESS, GET_ABOUTUS_FAIL, GET_ABOUTUS_SUCCESS, UPDATE_ABOUTUS_FAIL, UPDATE_ABOUTUS_SUCCESS } from "./aboutus.types";

const iniState = {
    content:{},
    loading:true,
    error:null,
    message:null 
}

export const aboutUsReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // add about us content
        case ADD_ABOUTUS_SUCCESS:
            return {
                ...state,
                content:payload,
                loading:false,
                error:null,
                message:"content added successfully."
            };
        
            case ADD_ABOUTUS_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get about us content 
            case GET_ABOUTUS_SUCCESS:
                return {
                    ...state,
                    content: payload,
                    loading:false,
                    error:null
                };
            case GET_ABOUTUS_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // update about us content
            case UPDATE_ABOUTUS_SUCCESS:
                return {
                    ...state,
                    content:{...state.content, ...payload},
                    loading:false,
                    error:null,
                    message:"content updated successfully."
                };
            case UPDATE_ABOUTUS_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // delete about us content
            case DELETE_ABOUTUS_SUCCESS:
                return {
                    ...state,
                    content:{},
                    loading:false,
                    error:null,
                    message:payload
                };
            case DELETE_ABOUTUS_FAIL:
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