import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './css/index.css'
import {Panel} from "./Panel";
import {CancelButton} from "./CancelButton";
import {
    arrowDownAction,
    arrowLeftAction,
    arrowRightAction,
    arrowUpAction, setActiveElement,
} from "../../store/screenKeyboardReducer";
import {addNumber, deleteNumber} from "../../store/phoneNumberReducer";
import {useHistory} from "react-router-dom";

export function ScreenKeyboardPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const phoneNumber = useSelector((state) => state.phoneNumber);
    const {section, activeElem} = useSelector((state) => state.screenKeyboard);
    const [checkedAgree, setCheckedAgree] = useState(false);

    const keyDownHandle = useCallback((e) => {
        if (e.key === 'ArrowRight') dispatch(arrowRightAction());
        if (e.key === 'ArrowLeft') dispatch(arrowLeftAction());
        if (e.key === 'ArrowUp') dispatch(arrowUpAction());
        if (e.key === 'ArrowDown') dispatch(arrowDownAction());
        if (e.key === 'Enter') {
            if (section === 'keyboards') {
                (activeElem === 'стереть') ? dispatch(deleteNumber()) : dispatch(addNumber(activeElem));
            }
            if (section === 'radio') return setCheckedAgree((!checkedAgree));
            if (section === 'confirmNumber' && checkedAgree && phoneNumber.length === 10) {
                return history.push('/slider');
            }
        }

        if (!isNaN(Number(e.key)) && e.code !== 'Space') {
            if (phoneNumber.length === Number(10)) return;
            dispatch(setActiveElement({section: 'keyboards', activeElem: Number(e.key)}));
            dispatch(addNumber(Number(e.key)));
        }

        if (e.code === 'Space' && e.key === ' ' && phoneNumber.length > Number(0)) return dispatch(deleteNumber());

    }, [activeElem, checkedAgree, dispatch, history, phoneNumber.length, section]);


    useEffect(() => {
        document.addEventListener('keydown', keyDownHandle);
        return () => document.removeEventListener('keydown', keyDownHandle);
    }, [keyDownHandle]);

    return (
        <div className={'ScreenKeyboardPage'}>
            <Panel activeElem={activeElem}
                   phoneNumber={phoneNumber}
                   checkedAgree={checkedAgree}
                   setCheckedAgree={setCheckedAgree}
            />
            <div className={'ImageInfoBlock'}/>
            <CancelButton activeElem={activeElem}/>
            <img className={'qrCodeInfo'} src={'images/qrCodeInfo.png'} alt="qr-code"/>
        </div>
    )
}