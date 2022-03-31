import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from './ticketService';

const initialState = {
    tickets : [],
    ticket : {},
    isSuccess : false,
    isError : false,
    isLoading : false,
    message : ''
}

export const createTicket = createAsyncThunk('ticket/createTicket' , async(ticketData, thunkAPI) => {
try {
    //get the token from backend. SInce it a protected route.
    const token = thunkAPI.getState().auth.user.token;
    
return await ticketService.createTicket(ticketData , token);
}catch(error) {
    const message = 
    (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();    
        return thunkAPI.rejectWithValue(message);
}
});

// get the tickets (get tickets from backend)

export const getTickets = createAsyncThunk('ticket/getAll' , async(_ , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await ticketService.getTickets(token)

    }catch(error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const ticketSlice = createSlice({
    name : 'ticket',
    initialState : initialState,
    reducers : {
reset : (state) => initialState
    },
    extraReducers : (builder) => {
    builder
    .addCase(createTicket.pending , (state) => {
state.isLoading = true;
    })
    .addCase(createTicket.fulfilled , (state,action) => {
        state.isSuccess = true;
        state.isLoading = false;
    })
    .addCase(createTicket.rejected , (state , action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    })
    .addCase(getTickets.pending , (state) => {
        state.isLoading = true;
            })
            .addCase(getTickets.fulfilled , (state,action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.tickets = action.payload;
            })
            .addCase(getTickets.rejected , (state , action) => {
              
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

    }
})
export default ticketSlice.reducer;
export const {reset}  = ticketSlice.actions;
