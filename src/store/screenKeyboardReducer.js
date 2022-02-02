import {createSlice} from "@reduxjs/toolkit";
import {keyBoardValues} from "./keyBoard";

// Управляет состоянием нажатий клавиш на странице с экранной клавиатурой
const screenKeyboardReducer = createSlice({
    name: 'screenKeyboard',
    initialState: {
        section: 'keyboards',
        activeElem: keyBoardValues[4],
    },
    reducers: {
        arrowRightAction(state) {
            if (state.section === 'keyboards') {
                if (state.activeElem !== Number(0)) {
                    const index = keyBoardValues.findIndex((elem) => elem === state.activeElem);
                    state.activeElem = keyBoardValues[index + 1];
                } else {
                    state.action = 'radio';
                    state.activeElem = 'Radio';
                }
            }
        },

        arrowLeftAction(state) {
            if (state.section === 'keyboards') {
                if (state.activeElem !== Number(1)) {
                    const index = keyBoardValues.findIndex((elem) => elem === state.activeElem);
                    state.activeElem = keyBoardValues[index - 1];
                }
            }
            if (state.section === 'cancelButton') {
                state.section = 'keyboards';
                state.activeElem = keyBoardValues[4];
            }
        },

        arrowUpAction(state) {
            if (state.section === 'keyboards') {
                const index = keyBoardValues.findIndex((elem) => elem === state.activeElem);
                if ([4, 5, 6, 7, 8, 9].includes(state.activeElem)) {
                    state.activeElem = keyBoardValues[index - 3];
                }
                if (state.activeElem === 'стереть' || state.activeElem === Number(0)) state.activeElem = keyBoardValues[index - 2];
            }
            if (state.section === 'radio') {
                state.section = 'keyboards';
                state.activeElem = keyBoardValues[10];
            }
            if (state.section === 'confirmNumber') {
                state.section = 'radio';
                state.activeElem = 'Radio';
            }
        },

        arrowDownAction(state) {
            if (state.section === 'keyboards') {
                const index = keyBoardValues.findIndex((elem) => elem === state.activeElem);
                if (state.activeElem === 'стереть' || state.activeElem === Number(0)) {
                    state.section = 'radio';
                    state.activeElem = 'Radio';
                }
                if (state.activeElem === 8 || state.activeElem === 9) state.activeElem = keyBoardValues[index + 2];
                if ([1, 2, 3, 4, 5, 6, 7,].includes(state.activeElem)) state.activeElem = keyBoardValues[index + 3];
                return state;
            }
            if (state.section === 'radio') {
                state.section = 'confirmNumber';
                state.activeElem = 'ButtonConfirmNumber';
                return ;
            }
            if (state.section === 'confirmNumber') {
                state.section = 'cancelButton';
                state.activeElem = 'CancelButton';
            }
        },

        setActiveElement(state, action) {
            const {section, activeElem} = action.payload;
            state.section = section;
            state.activeElem = activeElem;
        }
    },
});


export const {
    arrowRightAction,
    arrowLeftAction,
    arrowUpAction,
    arrowDownAction,
    setActiveElement
} = screenKeyboardReducer.actions;

export default screenKeyboardReducer.reducer;