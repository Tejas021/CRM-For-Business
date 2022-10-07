import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/auth'

export default configureStore({
    reducer:{
        auth:user,
    }
});