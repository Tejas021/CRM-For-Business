import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/auth'
import tickets from "./reducers/tickets";

export default configureStore({
    reducer:{
        auth:user,
        tickets:tickets
    }
});