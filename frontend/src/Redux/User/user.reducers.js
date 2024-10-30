import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, GET_USER_SUCCESS, GET_USER_FAIL, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, DELETE_USER_SUCCESS, DELETE_USER_FAIL, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL } from "./user.types";


const iniState = {
    token: localStorage.getItem('token')||null,
    isAuthenticated:localStorage.getItem('token') ? true : false,
    loading:true,
    error:null,
    user:null,
    message:null
}

export const userReducer = (state=iniState, {type, payload})=>{
    switch(type){
        // handle user registration
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token:payload.token,
                user:payload.user,
                isAuthenticated:true,
                loading:false,
                error:null
            };
        
        case REGISTER_FAIL:
            return {
                ...state, 
                token:null, 
                isAuthenticated:false, 
                loading:false, 
                error:payload, 
                user:null
            };

        // handle user login
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token:payload.token,
                user:payload.user,
                isAuthenticated:true,
                loading:false,
                error:null
            };
        case LOGIN_FAIL:
            return {
                ...state, 
                token:null, 
                isAuthenticated:false, 
                loading:false, 
                error:payload, 
                user:null
            };
        // handle logout
        case LOGOUT:
          localStorage.removeItem('token');
          localStorage.removeItem('user');
            return {
                ...state, 
                token:null, 
                isAuthenticated:false, 
                loading:false, 
                error:null, 
                user:null
            };
        
        // handle getting user data
        case GET_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated:true,
                loading: false,
                user:payload,
                error:null
            };
        
        case GET_USER_FAIL:
            return {
                ...state,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:payload
            };
        
        // handle updating user data
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user:payload,
                loading:false,
                error:null
            };
        
        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            };
        
        // handle deleting user account
        case DELETE_USER_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:null
            };
        
        case DELETE_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            };
        
        // handle password change
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                message:payload
            };
        
        case CHANGE_PASSWORD_FAIL:
            return{
                ...state,
                message:null,
                loading:false,
                error:payload
            };
        
        // default state
          default:{
            return state;
        }
    }
}