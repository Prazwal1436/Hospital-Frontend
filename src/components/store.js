import { configureStore } from '@reduxjs/toolkit'
import navReducer from './redux/navSlice'
import loginSlice from './redux/loginSlice'
import patientSlice from './redux/patientSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        login: loginSlice,
        patient:patientSlice,
    },
})

