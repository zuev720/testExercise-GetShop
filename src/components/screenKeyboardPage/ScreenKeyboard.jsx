import React, {useEffect, useRef} from "react";
import {addNumber, deleteNumber} from "../../store/phoneNumberReducer";
import {useDispatch} from "react-redux";
import {keyBoardValues} from "../../store/keyBoard";
import {setActiveElement} from "../../store/screenKeyboardReducer";

export function ScreenKeyboard(props) {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const {activeElem, phoneNumber} = props;

    useEffect(() => {
        if (ref.current !== null) ref.current.focus();
    }, [activeElem]);

    const handleClick = (value) => {
        dispatch(setActiveElement({section: 'keyboards', activeElem: value}));
        if (value === 'стереть') return dispatch(deleteNumber());
        if (phoneNumber.length === 10) return;
        dispatch(addNumber(value));
    }

    const KeyboardKey = (props) => {
        return (
            <button
                ref={(props.elem === activeElem) ? ref : null}
                className={(props.elem === activeElem) ? 'KeyboardKey keyActive' : 'KeyboardKey'}
                onMouseOver={() => dispatch(setActiveElement({section: 'keyboards', activeElem: props.elem}))}
                onMouseDown={() => handleClick(props.elem)}>{props.elem}</button>
        )
    }

    return (
        <div className={'ScreenKeyboard'}>
            {keyBoardValues.map((elem) => <KeyboardKey key={elem} elem={elem}/>)}
        </div>
    )
}