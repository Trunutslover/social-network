import * as axios from "axios";

export const getUsers = (count = 10, pageNumber = 1) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNumber}`,
        {withCredentials: true}
    ).then(response => response.data);
};

export const getProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
        {withCredentials: true}
    ).then(response => response.data);
};

export const getAuth = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials: true}
    ).then(response => response.data);
};

export const postFollow = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {"API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"}
    }).then(response => response.data);
};

export const delFollow = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {"API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"}
    }).then(response => response.data);
};