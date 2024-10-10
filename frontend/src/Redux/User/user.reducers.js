import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from "./user.types";


const iniState = {
    token: localStorage.getItem('token'),
    isAuthenticated:false,
    loading:true,
    user:null
}

export const userReducer = (state=iniState, {type, payload})=>{
    switch(type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {...state, ...payload, isAuthenticated:true, loading:false};
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT:
          localStorage.removeItem('token');
          return {...state, token:null, isAuthenticated:false, loading:false, user:null};
        default:{
            return state;
        }
    }
}