const initialState = {
    isLoggedIn: false,
};

export const SET_IS_LOGGEDIN = 'SET_IS_LOGGEDIN';

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: SET_IS_LOGGEDIN,
        isLoggedIn
    };
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_LOGGEDIN:
            return {...state, isLoggedIn: action.isLoggedIn};
        default:
            return state;
    }
};

export default authReducer;