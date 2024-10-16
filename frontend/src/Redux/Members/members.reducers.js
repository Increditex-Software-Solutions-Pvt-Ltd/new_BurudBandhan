import { ADD_MEMBER_FAIL, ADD_MEMBER_SUCCESS, CREATE_SUCCESS_VIDEO_FAIL, CREATE_SUCCESS_VIDEO_SUCCESS, DELETE_MEMBER_FAIL, DELETE_MEMBER_SUCCESS, DELETE_SUCCESS_VIDEO_FAIL, DELETE_SUCCESS_VIDEO_SUCCESS, GET_MEMBER_FAIL, GET_MEMBER_SUCCESS, GET_SUCCESS_VIDEO_FAIL, GET_SUCCESS_VIDEO_SUCCESS, UPDATE_MEMBER_FAIL, UPDATE_MEMBER_SUCCESS, UPDATE_SUCCESS_VIDEO_FAIL, UPDATE_SUCCESS_VIDEO_SUCCESS } from "./members.types";

const iniState = {
    members:[],
    member:null,
    loading:true,
    error:null,
    message:null 
}

export const memberReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // add new member
        case ADD_MEMBER_SUCCESS:
            return {
                ...state,
                member:payload,
                loading:false,
                error:null,
                message:"Member added successfully."
            };
        
            case ADD_MEMBER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // get members (either all or a specific member)
            case GET_MEMBER_SUCCESS:
                return {
                    ...state,
                    members: Array.isArray(payload)?payload:state.members,
                    member: !Array.isArray(payload)?payload:state.member,
                    loading:false,
                    error:null
                };
            case GET_MEMBER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // update member info
            case UPDATE_MEMBER_SUCCESS:
                return {
                    ...state,
                    member:{...state.member, ...payload},
                    loading:false,
                    error:null,
                    message:"Member information updated successfully."
                };
            case UPDATE_MEMBER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:payload
                };
            
            // delete member
            case DELETE_MEMBER_SUCCESS:
                return {
                    ...state,
                    member:null,
                    members:state.members.filter((m)=>m.id !== payload.id),
                    loading:false,
                    error:null,
                    message:payload
                };
            case DELETE_MEMBER_FAIL:
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