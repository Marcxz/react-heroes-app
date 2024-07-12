import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types'

const initialState = {
    logged: false,
    name: null,
}

const AuthProvider = ({ children } : { children: any}) => {

    const init = () => {
        const userLocalStorage = localStorage.getItem('user');
        if (userLocalStorage) {
            return JSON.parse(userLocalStorage);
        } else {
            return {
                logged: false,
                name: null,
            }
        }
    }

    const [authState, dispatch] = useReducer(authReducer, initialState, init)
    
    const login = async (name = '') => {
        const action: any = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
            }
        }
        dispatch(action);
        localStorage.setItem('user', JSON.stringify({logged: true, name}));
    }
    const logout = async () => {
        const action: any = {
            type: types.logout,
            payload: null,
        }
        dispatch(action);
        localStorage.removeItem('user');
    }
 return (
    <AuthContext.Provider value={{ authState, login, logout, ...authState}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
