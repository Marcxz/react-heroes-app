import { authReducer } from "../../../auth"
import { types } from "../../../auth/types";

describe('Suite de pruebas de authReducer', () => {
    const initialState = {
        logged: false,
        name: null,
    }

    let actionMock = {
        type: '',
        payload: null
    }

    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer( initialState, actionMock);
        expect(state).toEqual(initialState);
    });

    test('debe de (login( llamar el login autenticar y establecer el user', () => {
        let action = {
            type: types.login,
            payload: {
                name: 'mike'
            }
        }

        const state = authReducer(initialState, action);
        expect(state.name).toEqual('mike')
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        let action = {
            type: types.logout,
            payload: {
                name: '',
            }
        }
        const state = authReducer(initialState, action);

        expect(state.logged).toEqual(false);
        expect(state.name).toEqual(null);
    })

})