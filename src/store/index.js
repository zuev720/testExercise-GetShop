import {combineReducers, configureStore} from '@reduxjs/toolkit';
import phoneNumberReducer from './phoneNumberReducer'
import screenKeyboardReducer from "./screenKeyboardReducer";

const rootReducer = combineReducers({
    phoneNumber: phoneNumberReducer,
    screenKeyboard: screenKeyboardReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});