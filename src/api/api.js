import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"
    }
});

export const getUsers = async (count = 10, pageNumber = 1) => {
    const response = await instance.get(`users?count=${count}&page=${pageNumber}`);
    return response.data;
};

export const getProfile = async (userId) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
};

export const getAuth = async () => {
    const response = await instance.get(`auth/me`);
    return response.data;
};

export const postFollow = async (userId) => {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
};

export const delFollow = async (userId) => {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
};

export const getStatus = async (userId) => {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
};

export const putMyStatus = async (status) => {
    const response = await instance.put(`profile/status`, {status});
    return response.data;
};

export const postLogin = async (email, password, rememberMe) => {
    const response = await instance.post(`auth/login`, {email, password, rememberMe});
    return response.data;
};

export const delLogin = async () => {
    const response = await instance.delete(`auth/login`);
    return response.data;
};

export const putPhoto = async (photo) => {
    const formData = new FormData();
    formData.append(`image`, photo);

    const response = await instance.put(`profile/photo`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    });
    return response.data;
};

export const putProfile = async (profile) => {
    const response = await instance.put(`profile`, profile);
    return response.data;
};