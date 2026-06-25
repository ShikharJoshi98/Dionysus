import authTypes from "./authActionType";

const initialState = {
    register: {
        loading: false,
        error: null,
        message: null
    },
    login: {
        loading: false,
        error: null,
        message: null
    },
    logout: {
        loading: false,
        error: null,
        message: null
    },
    checkAuth: {
        loading: false,
        error: null,
        message: null
    },
    user: null,
    isAuthenticated: false,
    authChecked: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.REGISTER_REQUEST:
            return {
                ...state,
                register: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case authTypes.REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case authTypes.LOGIN_REQUEST:
            return {
                ...state,
                login: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                isAuthenticated: true,
                login: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                login: {
                    loading: false,
                    error: action.payload,
                    message: null
                },
                user: null,
                isAuthenticated: false
            };
        case authTypes.LOGOUT_REQUEST:
            return {
                ...state,
                logout: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case authTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                logout: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case authTypes.LOGOUT_FAILURE:
            return {
                ...state,
                logout: {
                    loading: false,
                    error: action.payload,
                    message: null
                },
            };
        case authTypes.CHECK_AUTH_REQUEST:
            return {
                ...state,
                checkAuth: {
                    loading: true,
                    error: null,
                    message: null
                }
            }
        case authTypes.CHECK_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                },
                isAuthenticated: true,
                authChecked: true
            }
        case authTypes.CHECK_AUTH_FAILURE:
            return {
                ...state,
                user: null,
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                },
                isAuthenticated: false,
                authChecked: true
            }
        case authTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                register: {
                    loading: false,
                    error: null,
                    message: null
                },
                login: {
                    loading: false,
                    error: null,
                    message: null
                },
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                }
            };
        default:
            return state;
    }
}