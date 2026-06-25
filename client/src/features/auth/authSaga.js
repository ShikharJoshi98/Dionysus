import { all, call, put, takeLatest } from "redux-saga/effects";
import authTypes from "./authActionType";
import { checkAuth, loginUser, logoutUser, registerUser } from "./authApi";
import { checkAuthFailure, checkAuthSuccess, loginFailure, loginSuccess, logoutFailure, logoutSuccess, registerFailure, registerSuccess } from "./authAction";

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

function* logoutSaga() {
    try {
        const response = yield call(
            logoutUser
        );

        yield put(logoutSuccess(response));
    } catch (error) {
        yield put(logoutFailure(error.message));
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
            authTypes.LOGOUT_REQUEST,
            logoutSaga
        ),
        takeLatest(
            authTypes.CHECK_AUTH_REQUEST,
            checkAuthSaga
        )
    ]);
}

export default authSaga