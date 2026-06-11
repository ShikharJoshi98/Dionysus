import authTypes from "./authActionType";

export const registerRequest = (credentials) => {
    return {
        type: authTypes.REGISTER_REQUEST,
        payload: credentials
    }
}

export const registerSuccess = (data) => {
    return {
        type: authTypes.REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFailure = (error) => {
    return {
        type: authTypes.REGISTER_FAILURE,
        payload: error
    }
}

export const loginRequest = (credentials) => {
    return {
        type: authTypes.LOGIN_REQUEST,
        payload: credentials
    }
}

export const loginSuccess = (data) => {
    return {
        type: authTypes.LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = (error) => {
    return {
        type: authTypes.LOGIN_FAILURE,
        payload: error
    }
}

export const clearAuthState = () => {
    return {
        type: authTypes.CLEAR_AUTH_STATE
    }
}