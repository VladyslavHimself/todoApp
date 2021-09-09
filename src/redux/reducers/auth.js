import {SET_LOGIN_STATUS_TO_ACTIVE, SET_USER_DATA} from "../actions/actionTypes";

const initialState = {
    user: {
        email: null,
        password: null,
        isLoggedIn: false,
    },
}
export const auth = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            const newUserData = {...state.user};
            newUserData.email = action.payload.email;
            newUserData.password = action.payload.password;
            return {
                user: newUserData,
            }

        case SET_LOGIN_STATUS_TO_ACTIVE:

            const newState = {...state.user};
            newState.isLoggedIn = true;
            return {
                user: newState
            }

        default: return state;
    }
}