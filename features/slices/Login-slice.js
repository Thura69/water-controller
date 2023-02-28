import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loginStatus: {
        access: typeof window !== "undefined" ? window.localStorage.getItem('access') : null,
        refresh: typeof window !== "undefined" ? window.localStorage.getItem('refresh'):null,
        isFetching: false,
        error: false
    }
};





const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        LOGIN_START(state, action) {
            state.loginStatus = action.payload;
        },
        LOGIN_SUCCESS(state, action) {
            state.loginStatus = action.payload;
        },
        LOGIN_FAILURE(state, action) {
            state = action.payload;
        },
        LOGOUT(state, action) {
            state.loginStatus = action.payload;
        },
    }
    
});

export const { LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = LoginSlice.actions;
export default LoginSlice;