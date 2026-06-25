import { get, post } from "../../api/apiClient";

export const createProject = (credentials) => {
    return post("/project/create", credentials);
}

export const getProjects = () => {
    return get("/project/getAll");
}