import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
})