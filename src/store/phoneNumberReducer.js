import {createSlice} from "@reduxjs/toolkit";

const phoneNumberReducer = createSlice({
    name: 'phoneNumber',
    initialState: [],
    reducers: {
        addNumber(state, action) {
            state.push(action.payload);
        },
        deleteNumber(state, action) {
            state.pop();
        },
    },
});


export const {
    addNumber,
    deleteNumber,
} = phoneNumberReducer.actions;

export default phoneNumberReducer.reducer;
