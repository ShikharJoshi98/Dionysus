import { post } from "../../api/apiClient";

export const registerUser = (credentials) => {
    return post("/auth/register", credentials);
}

export const loginUser = (credentials) => {
    return post("/auth/login", credentials);
}

export const logoutUser = () => {
    return post("/auth/logout");
}

export const checkAuth = () => {
    return post("/auth/checkAuth");
}