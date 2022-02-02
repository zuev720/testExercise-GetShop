import {combineReducers, configureStore} from '@reduxjs/toolkit';
import phoneNumberReducer from './phoneNumberReducer'
import screenKeyboardReducer from "./screenKeyboardReducer";
import timeVideoReducer from "./timeVideoReducer";
import validNumberReducer from "./validNumberReducer";

const rootReducer = combineReducers({
    timeVideo: timeVideoReducer,
    phoneNumber: phoneNumberReducer,
    screenKeyboard: screenKeyboardReducer,
    validNumber: validNumberReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});