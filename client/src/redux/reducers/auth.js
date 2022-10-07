import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState:{
        currentUser : null
    },
    reducers:{
        setUser:(state,action)=>{
            state.currentUser = action.payload;
        },
        logout:(state,action)=>{
            state.currentUser = null;
            localStorage.setItem('token','')
            localStorage.setItem('x-auth-token','')
        }
        
    }
})

export const {setUser,logout} = userSlice.actions;
export default userSlice.reducer;