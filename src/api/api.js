import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"
    }
})

export const getUsers = (count = 10, pageNumber = 1) => {
    return instance.get(`users?count=${count}&page=${pageNumber}`)
        .then(response => response.data);
};

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data);
};

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response => response.data);
};

export const postFollow = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
};

export const delFollow = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
};