import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from "./user.types";
import axios from 'axios';
import api from '../api';

export const register = (userData) => async(dispatch) =>{
    try{
        const res = await api.post('/user/auth/signup', userData);
        dispatch({ type:REGISTER_SUCCESS, payload: res.data });
    }catch(err){
        dispatch({type:REGISTER_FAIL, payload:err.response.data});
    }
}

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

export const logout = (dispatch)=>{
    dispatch({ type: LOGOUT });;
}