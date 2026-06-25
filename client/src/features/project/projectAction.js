import projectType from "./projectActionType";

export const createProjectRequest = (credentials) => {
    return {
        type: projectType.PROJECT_CREATE_REQUEST,
        payload: credentials
    }
}

export const createProjectSuccess = (data) => {
    return {
        type: projectType.PROJECT_CREATE_SUCCESS,
        payload: data
    }
}

export const createProjectFailure = (error) => {
    return {
        type: projectType.PROJECT_CREATE_FAILURE,
        payload: error
    }
}

export const getProjectsRequest = () => {
    return {
        type: projectType.PROJECT_GET_ALL_REQUEST
    }
}

export const getProjectsSuccess = (data) => {
    return {
        type: projectType.PROJECT_GET_ALL_SUCCESS,
        payload: data
    }
}

export const getProjectsFailure = (error) => {
    return {
        type: projectType.PROJECT_GET_ALL_FAILURE,
        payload: error
    }
}

export const clearProjectState = () => {
    return {
        type: projectType.CLEAR_PROJECT_STATE
    }
}