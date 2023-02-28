import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/Login-slice";


export const store = configureStore({
    reducer: {
        login: LoginSlice.reducer
    }
});