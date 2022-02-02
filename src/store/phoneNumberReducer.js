import {createSlice} from "@reduxjs/toolkit";

// Управляет состоянием номера телефона на странице с экранной клавиатурой
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
