import {createSlice} from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name : "user",
    initialState:{
        tickets : null
    },
    reducers:{
        setTickets:(state,action)=>{
            state.tickets = action.payload;
        },
        
        
    }
})

export const {setTickets} = ticketSlice.actions;
export default ticketSlice.reducer;