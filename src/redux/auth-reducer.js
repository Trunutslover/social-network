import {delLogin, getAuth, postLogin} from "../api/api";

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
                isAuth: action.isAuth
            };

        default:
            return state;
    }
};

export const setAuthData = (data, isAuth) => ({type: SET_AUTH_DATA, ...data, isAuth});

export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        getAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthData(data.data, true));
                } else {
                    dispatch(setAuthData({id: null, email: null, login: null}, false))
                }
            })
    }
};

export const loginThunkCreator = (loginData) => {
    return (dispatch) => {
        postLogin(loginData.email, loginData.password, loginData.rememberMe = false)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthDataThunkCreator());
                }
            })
    }
};

export const logoutThunkCreator = () => {
    return (dispatch) => {
        delLogin()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthDataThunkCreator())
                }
            })
    }
};