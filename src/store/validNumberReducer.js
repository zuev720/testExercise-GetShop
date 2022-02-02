import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const requestValidNumber = createAsyncThunk(
    'requestValidNumber',
    async (phoneNumber, rejectWithValue) => {
        try {
            const response = await fetch(`http://apilayer.net/api/validate?access_key=0b20ce13fbc2618ea70e15299bfd5ce6&number=${phoneNumber}&country_code=RU&format=1`);

            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const validNumberReducer = createSlice({
    name: 'validNumber',
    initialState: {
        data: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [requestValidNumber.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [requestValidNumber.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [requestValidNumber.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        },
    }
});

export default validNumberReducer.reducer;