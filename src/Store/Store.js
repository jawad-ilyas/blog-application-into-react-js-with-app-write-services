import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice.js"

const Store = configureStore({
    reducer: {
        auth: AuthSlice
    }
})

export default Store;