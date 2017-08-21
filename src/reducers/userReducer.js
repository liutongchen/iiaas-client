import * as types from '../actions/actionTypes';

const initialState = {
    hasLoggedIn: false,
    data: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                hasLoggedIn: true,
                data: action.user,
            };
        }

        case types.LOGOUT: {
            return {
                hasLoggedIn: false,
                data: null,
            };
        }

        case types.REGISTER_SUCCESS: {
            return {
                hasLoggedIn: true,
                data: action.user,
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;