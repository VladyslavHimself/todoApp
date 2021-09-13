import {SET_LOGIN_STATUS_TO_ACTIVE, SET_USER_DATA} from "./actionTypes";

export function setLoginStatusToActive() {
    return {
        type: SET_LOGIN_STATUS_TO_ACTIVE,
    }
}

export function setUserData(userData) {
    return {
        type: SET_USER_DATA,
        payload: userData,
    }
}
