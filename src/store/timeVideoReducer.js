import {createSlice} from "@reduxjs/toolkit";

// Управляет состоянием видео на начальной странице
const phoneNumberReducer = createSlice({
    name: 'timeVideo',
    initialState: Number(0),
    reducers: {
        setTimeVideo(state, action) {
            return action.payload;
        },
    },
});


export const {
    setTimeVideo,
} = phoneNumberReducer.actions;

export default phoneNumberReducer.reducer;