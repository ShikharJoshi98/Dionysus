import projectType from "./projectActionType";

const initialState = {
    createProject: {
        loading: false,
        error: null,
        message: null
    },
    getProjects: {
        loading: false,
        error: null,
        projects: []
    }
};


const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case projectType.PROJECT_CREATE_REQUEST:
            return {
                ...state,
                createProject: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case projectType.PROJECT_CREATE_SUCCESS:
            return {
                ...state,
                createProject: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case projectType.PROJECT_CREATE_FAILURE:
            return {
                ...state,
                createProject: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case projectType.PROJECT_GET_ALL_REQUEST:
            return {
                ...state,
                getProjects: {
                    loading: true,
                    error: null,
                    projects: []
                }
            };
        case projectType.PROJECT_GET_ALL_SUCCESS:
            return {
                ...state,
                getProjects: {
                    loading: false,
                    error: null,
                    projects: action.payload.data
                }
            };
        case projectType.PROJECT_GET_ALL_FAILURE:
            return {
                ...state,
                getProjects: {
                    loading: false,
                    error: action.payload,
                    projects: []
                }
            };
        case projectType.CLEAR_PROJECT_STATE:
            return {
                ...state,
                createProject: {
                    loading: false,
                    error: null,
                    message: null
                },
                getProjects: {
                    loading: false,
                    error: null,
                }
            };
        default:
            return state;
    }
}

export default projectReducer