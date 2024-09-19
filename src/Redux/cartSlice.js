import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action)
        },
        removeItem: (state, action) => {
            const titleToRemove = action.payload.price;
            // return state.filter(item => item.price !== priceToRemove);
            const index = state.findIndex(item => item.title === titleToRemove);
            if (index !== -1) {
                // Remove the item at the found index
                state.splice(index, 1);
            }
        }
    }
})

export const cartItemSelector = createSelector((state) => state.cart, (state) => state);

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;