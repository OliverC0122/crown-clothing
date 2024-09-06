import { takeLatest, all, put, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, 
        signInFailed,
        signUpSuccess,
        signOutSuccess,
        signOutFailed
 } from "./user.action";

import api from '../../api/axios/axiosConfig';


export function* signIn({payload: {username, password}}){
    try {
        const res = yield call(api.post,'/login',{username,password});
        console.log(res);
        if (res.status === 200) {
            const user = res.data.user;
            console.log('sign in saga',user);

            yield put(signInSuccess(user));
        } else {
            alert('Incorrect username or Password, please try again.');
        }


    }catch(err){
        yield put(signInFailed(err))
    }
}

export function* signUp({payload: {username,email,password}}){

    try {
        const res = yield call(api.post,'/register',{username,email,password});

        const user = res.data;
        console.log('sign up saga',user);

        yield put(signUpSuccess(user));

    }catch(err){
        yield put(signInFailed(err));
    }
}

export function* signOut() {
    try {

        yield call(api.get, '/logout');
        yield put(signOutSuccess());
    } catch (err) {
        yield put(signOutFailed(err));
    }
}

export function* signInAfterSignUp({payload: user}) {

    console.log('sign in after sign up',user);
    yield put(signInSuccess(user));
}

export function* onSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START,signIn);

}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp);
}   

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut);
}

export function* userSagas(){
    yield all([call(onSignInStart),
                call(onSignUpStart),
                call(onSignUpSuccess),
                call(onSignOutStart),
    ])
}
