import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";


export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);
}

export const signInStart = (username,password) => createAction(USER_ACTION_TYPES.SIGN_IN_START,{username,password});

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS,user);

export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error);

export const signUpStart = (username,email,password) => createAction(USER_ACTION_TYPES.SIGN_UP_START,{username,email,password});

export const signUpSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,user);

export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error);

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error);