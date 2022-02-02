import {combineReducers, configureStore} from '@reduxjs/toolkit';
import phoneNumberReducer from './phoneNumberReducer'
import screenKeyboardReducer from "./screenKeyboardReducer";
import timeVideoReducer from "./timeVideoReducer";

const rootReducer = combineReducers({
    timeVideo: timeVideoReducer,
    phoneNumber: phoneNumberReducer,
    screenKeyboard: screenKeyboardReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});