import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, GET_USER_SUCCESS, GET_USER_FAIL, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, DELETE_USER_SUCCESS, DELETE_USER_FAIL, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL } from "./user.types";
import axios from 'axios';
import api from '../api';

// register user
export const register = (userData) => async(dispatch) =>{
    try{
        const res = await api.post('/user/auth/signup', userData);
        dispatch({ type:REGISTER_SUCCESS, payload: res.data });
    }catch(err){
        dispatch({type:REGISTER_FAIL, payload:err.response.data});
    }
}

// login user
export const login = (userData) => async(dispatch) =>{
    
    try{
        const res = await api.post(`/user/auth/login`, userData);
        // console.log(res);
        dispatch({type: LOGIN_SUCCESS, payload:res.data});
    }catch(err){
        // console.log('err', err.response.data.message);
        dispatch({type:LOGIN_FAIL, payload:err.response.data.message});
    }
}

// logout user
export const logout = (dispatch)=>{
    dispatch({ type: LOGOUT });;
}

// get user info
export const getUser = ()=>async(dispatch)=>{
    try{
        const res = await api.get('/user/auth/profile');
        dispatch({type:GET_USER_SUCCESS, payload:res.data});

    }catch(err){
        dispatch({type:GET_USER_FAIL, payload:err.response?.data?.message || "Failed to fetch user data"});
    }
}


// update user info
export const updateUser = (userData)=>async (dispatch) => {
    try{
        const res = await api.patch('/user/auth/editprofile', userData);
        dispatch({type:UPDATE_USER_SUCCESS, payload:res.data});

    }catch(err){
        dispatch({type:UPDATE_USER_FAIL, payload:err.response?.data?.message || "Failed to update user information"});
    }
}

// delete user account
export const deleteUser = ()=>async(dispatch)=>{
    try{
        const res = await api.delete('/user/auth/delete');
        dispatch({type:DELETE_USER_SUCCESS, payload:res.data});
    }catch(err){
        dispatch({type:DELETE_USER_FAIL, payload:err.response?.data?.message || "Failed to delete user"});
    }
}


// change password
export const changePassword = (passwordData) => async(dispatch)=>{
    try{
        const res = await api.patch('/user/auth/change-password', passwordData);
        dispatch({type:CHANGE_PASSWORD_SUCCESS, payload:res.data.message});
    }catch(err){
        dispatch({type:CHANGE_PASSWORD_FAIL, payload:err.response?.data?.message ||'Failed to change password'});
    }
}