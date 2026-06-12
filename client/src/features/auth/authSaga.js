import { all, call, put, takeLatest } from "redux-saga/effects";
import authTypes from "./authActionType";
import { checkAuth, loginUser, registerUser } from "./authApi";
import { checkAuthFailure, checkAuthSuccess, loginFailure, loginSuccess, registerFailure, registerSuccess } from "./authAction";

function* registerSaga(action) {
    try {
        const response = yield call(
            registerUser,
            action.payload
        );

        yield put(registerSuccess(response));
    } catch (error) {
        yield put(registerFailure(error.message));
    }
}

function* loginSaga(action) {
    try {
        const response = yield call(
            loginUser,
            action.payload
        );

        yield put(loginSuccess(response));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* checkAuthSaga() {
    try {
        const response = yield call(
            checkAuth
        );

        yield put(checkAuthSuccess(response));
    } catch (error) {
        yield put(checkAuthFailure(error.message));
    }
}

function* authSaga() {
    yield all([
        takeLatest(
            authTypes.REGISTER_REQUEST,
            registerSaga
        ),
        takeLatest(
            authTypes.LOGIN_REQUEST,
            loginSaga
        ),
        takeLatest(
            authTypes.CHECK_AUTH_REQUEST,
            checkAuthSaga
        )
    ]);
}

export default authSaga