import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authReducer";
import projectReducer from "../features/project/projectReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})