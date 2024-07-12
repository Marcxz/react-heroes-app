import { types } from "../types";

const initialState = {
    logged : false,
    name: 'mike',
}

export const authReducer = (state: any = initialState, action: any) => {
    
    switch(action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload.name,
            };
        case types.logout: 
            return {
                logged: false,
                name: null,
            };
        default:
            return state;
    }
}