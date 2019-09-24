const SET_AUTH_DATA = `SET_AUTH_DATA`;

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthData = (data) => ({type: SET_AUTH_DATA, ...data});