import React, {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import {setActiveElement} from "../../store/screenKeyboardReducer";
import {useDispatch} from "react-redux";

export function ButtonConfirmNumber(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const ref = useRef(null);
    const {activeElem, checkedAgree, phoneNumber} = props;

    useEffect(() => {
        if (checkedAgree && phoneNumber.length === 10) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [checkedAgree, phoneNumber.length]);

    useEffect(() => {
        if (ref.current !== null) ref.current.focus();
    }, [activeElem, disabled]);

    const handleClick = () => {
        history.push('/slider');
    }

    const handleMouseOver = () => {
        if (!disabled && phoneNumber.length === 10) {
            dispatch(setActiveElement({section: 'confirmNumber', activeElem: 'ButtonConfirmNumber'}))
        }
    }

    return(
        <button
            ref={(activeElem === 'ButtonConfirmNumber' && !disabled) ? ref : null}
            className={'ButtonConfirmNumber'}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            disabled={disabled}>Подтвердить номер</button>
    )
}