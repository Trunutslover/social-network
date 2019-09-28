/*Импорты*/
import {getProfile, getStatus, putMyStatus} from "../api/api";

/* Экшены */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

/* Инишиал стейт */
const initialState = {
    userProfile: null,
    status: ``
};

/* Редьюсер */
export default function profileReducer (state = initialState, action) {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
};

/* Экшен криэйторы */
export const setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

/* Санк криэйторы */
export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
};

export const setStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
};

export const putMyStatusThunkCreator = (status) => {
    return (dispatch) => {
        putMyStatus(status)
            .then(data =>{
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
};