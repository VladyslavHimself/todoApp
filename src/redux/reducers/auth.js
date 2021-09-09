import {SET_USER_DATA} from "../actions/actionTypes";

const initialState = {
    user: {
        email: null,
        password: null,
    },
}
export const auth = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            const newUserData = {...state.user};
            newUserData.user = action.payload.email;
            newUserData.password = action.payload.password;
            return {
                user: newUserData,
            }

        default: return state;
    }
}