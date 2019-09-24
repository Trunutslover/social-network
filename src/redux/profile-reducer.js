/* Экшены */
const SET_USER_PROFILE = 'SET_USER_PROFILE';

/* Инишиал стейт */
const initialState = {
    userProfile: null
};

/* Редьюсер */
export default function profileReducer (state = initialState, action) {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
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