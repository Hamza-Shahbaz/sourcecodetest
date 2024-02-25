import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import menuReducer from './menu/menuSlice'
import userReducer from './user/userSlice'
import attReducer from './attandance/attSlice'

export const store = configureStore({
    reducer : {
        auth : authReducer,
        menu: menuReducer,
        user: userReducer,
        attandance : attReducer
    }
})