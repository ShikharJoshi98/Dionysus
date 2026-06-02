import authTypes from "./authActionType";

const initialState = {
    register: {
        loading: false,
        error: null,
        message: null
    }
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
        case authTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                register: {
                    loading: false,
                    error: null,
                    message: null
                }
            };
        default:
            return state;
    }
}