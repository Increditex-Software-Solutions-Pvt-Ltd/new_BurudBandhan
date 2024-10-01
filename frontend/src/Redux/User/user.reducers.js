import { LOGIN, SIGNUP } from "./user.types";


const iniState = {
    user:null
}

export const userReducer = (state=iniState, {type})=>{
    switch(type){
        case SIGNUP:{
            // signup state here
        }
        case LOGIN:{
            // login state here
        }
        default:{
            return state;
        }
    }
}