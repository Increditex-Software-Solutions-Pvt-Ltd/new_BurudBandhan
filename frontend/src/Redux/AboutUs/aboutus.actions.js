import api from "../api"
import { ADD_ABOUTUS_FAIL, ADD_ABOUTUS_SUCCESS, DELETE_ABOUTUS_FAIL, DELETE_ABOUTUS_SUCCESS, GET_ABOUTUS_FAIL, GET_ABOUTUS_SUCCESS, UPDATE_ABOUTUS_FAIL, UPDATE_ABOUTUS_SUCCESS } from "./aboutus.types";

// add about us content
export const addAboutUsContent = (content)=> async (dispatch) =>{
    try{
        const res = await api.post("/about-us/add", content);
        dispatch({type:ADD_ABOUTUS_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:ADD_ABOUTUS_FAIL, payload:err.response?.data?.message || "Failed to add about us content!"});
    }
}

// get all about us content
export const getAboutUsContent = () => async(dispatch)=>{
    try{
        const res = await api.get('/about-us');
        dispatch({type:GET_ABOUTUS_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:GET_ABOUTUS_FAIL, payload:err.response?.data?.message || "Failed to get about us content!"});
    }
}


// update about us content
export const updateAboutUsContent = (content) => async (dispatch)=>{
    try{
        const res = await api.patch(`/about-us/update`, content);
        dispatch({type:UPDATE_ABOUTUS_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:UPDATE_ABOUTUS_FAIL, payload:err.response?.data?.message || "Failed to update about us content!"});
    }
}

// delete about us content
export const deleteAboutUsContent = () => async (dispatch)=>{
    try{
        const res = await api.delete(`/about-us/delete`);
        dispatch({type:DELETE_ABOUTUS_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:DELETE_ABOUTUS_FAIL, payload:err.response?.data?.message || "Failed to delete about us content!"});
    }
}