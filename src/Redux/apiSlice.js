import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
});

const apiSlice = createSlice({
    name: "api",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
            console.log(action, "---- pending")
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            console.log(action, "---- fulfilled")
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            console.log(action.payload, "---- error")
        })
    }
})

export default apiSlice.reducer;