import { post } from "../../api/apiClient";

export const registerUser = (credentials) => {
    return post("/auth/register", credentials);
}