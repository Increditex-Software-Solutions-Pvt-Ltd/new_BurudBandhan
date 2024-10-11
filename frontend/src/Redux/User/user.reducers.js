import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from "./user.types";


const iniState = {
    token: localStorage.getItem('token')||null,
    isAuthenticated:localStorage.getItem('token') ? true : false,
    loading:true,
    error:null,
    user:null
}

export const userReducer = (state=iniState, {type, payload})=>{
    console.log(state);
    switch(type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token:payload.token,
                user:payload.user,
                isAuthenticated:true,
                loading:false
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {...state, token:null, isAuthenticated:false, loading:false, error:payload.message, user:null};
        case LOGOUT:
          localStorage.removeItem('token');
          return {...state, token:null, isAuthenticated:false, loading:false, error:null, user:null};
        
        
          default:{
            return state;
        }
    }
}