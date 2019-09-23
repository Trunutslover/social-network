const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SELECT_PAGE = 'SELECT_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [],
    totalCount: 0,
    page: 1,
    count: 10
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case SELECT_PAGE:
            return {
                ...state,
                page: action.page
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((value) => {
                    if(action.user === value.id) {
                        return {...value, followed: true}
                    }

                    return value;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((value) => {
                    if(action.user === value.id) {
                        return {...value, followed: false}
                    }

                    return value;
                })
            };

        default: return state;
    }
};

export default usersReducer;

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};

export const setTotalCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};

export const selectPageAC = (page) => {
    return {type: SELECT_PAGE, page}
};

export const followAC = (user) => {
    return {type: FOLLOW, user}
};

export const unfollowAC = (user) => {
    return {type: UNFOLLOW, user}
};