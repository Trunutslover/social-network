/*Импорты*/
import {getProfile, getStatus, putMyStatus, putPhoto, putProfile} from "../api/api";
import {stopSubmit} from "redux-form";

/* Константы экшенов */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

/* Инишиал стейт */
const initialState = {
    userProfile: null,
    status: ``
};

/* Редьюсер */
export default function profileReducer(state = initialState, action) {
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
    return async (dispatch) => {
        const data = await getProfile(userId);
        dispatch(setUserProfile(data))
    }
};

export const setStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await getStatus(userId);
        dispatch(setStatus(data))
    }
};

export const putMyStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await putMyStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
};

export const putMyPhotoThunkCreator = (photo, myId) => {
    return async (dispatch) => {
        const data = await putPhoto(photo);
        if(data.resultCode === 0) {
            dispatch(setUserProfileThunkCreator(myId));
        }
    }
};

export const putMyProfileThunkCreator = (profile, myId) => {
    return async (dispatch) => {
        const data = await putProfile(profile);
        if(data.resultCode === 0) {
            dispatch(setUserProfileThunkCreator(myId));
        } else {
            debugger
            dispatch(stopSubmit(`profileEditForm`, {_error: data.messages[0]}));
            return Promise.reject(data.messages[0]);
        }
    }
};