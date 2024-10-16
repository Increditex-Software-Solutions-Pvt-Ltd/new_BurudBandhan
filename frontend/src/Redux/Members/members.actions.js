import api from "../api";
import { ADD_MEMBER_FAIL, ADD_MEMBER_SUCCESS, DELETE_MEMBER_FAIL, DELETE_MEMBER_SUCCESS, GET_MEMBER_FAIL, GET_MEMBER_SUCCESS, UPDATE_MEMBER_FAIL, UPDATE_MEMBER_SUCCESS } from "./members.types";

// add new member
export const addNewMember = (member)=> async (dispatch) =>{
    try{
        const res = await api.post("/members/add", member);
        dispatch({type:ADD_MEMBER_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:ADD_MEMBER_FAIL, payload:err.response?.data?.message || "Failed to add new member!"});
    }
}

// get all members
export const getAllMembers = () => async(dispatch)=>{
    try{
        const res = await api.get('/members');
        dispatch({type:GET_MEMBER_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_MEMBER_FAIL, payload:err.response?.data?.message || "Failed to get all members!"});
    }
}

// get single member by id 
export const getSingleMember = (id) => async(dispatch)=>{
    try{
        const res = await api.get(`/members/${id}`);
        dispatch({type:GET_MEMBER_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_MEMBER_FAIL, payload:err.response?.data?.message || "Failed to get member!"});
    }
}

// update member info by id
export const updateMemberInfo = (updatedMember, id) => async (dispatch)=>{
    try{
        const res = await api.patch(`/members/${id}`, updatedMember);
        dispatch({type:UPDATE_MEMBER_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_MEMBER_FAIL, payload:err.response?.data?.message || "Failed to update member information!"});
    }
}

// delete member by id
export const deleteMember = (id) => async (dispatch)=>{
    try{
        const res = await api.delete(`/members/${id}`);
        dispatch({type:DELETE_MEMBER_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_MEMBER_FAIL, payload:err.response?.data?.message || "Failed to delete member!"});
    }
}