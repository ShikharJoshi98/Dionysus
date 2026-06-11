import { all, call, put, takeLatest } from "redux-saga/effects";
import authTypes from "./authActionType";
import { loginUser, registerUser } from "./authApi";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./authAction";

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

function* authSaga() {
    yield all([
        takeLatest(
            authTypes.REGISTER_REQUEST,
            registerSaga
        ),
        takeLatest(
            authTypes.LOGIN_REQUEST,
            loginSaga
        )
    ]);
}

export default authSaga