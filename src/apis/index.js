import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getUsersAPI = async () => axios.get("/users");

export const getUseraByIdAPI = async (id) => axios.get(`/users/${id}`);

export const createUserAPI = async (user) => axios.post("/users", user);

export const updateUserAPI = async (user) => axios.post(`/users/${user.id}`, user);

export const deleteUserByIdAPI = async (id) => axios.delete(`/users/${id}`)
