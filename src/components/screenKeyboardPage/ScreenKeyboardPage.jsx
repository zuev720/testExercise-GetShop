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
import {requestValidNumber} from "../../store/validNumberReducer";


// навигация с помощью клавиш клавиатуры осуществляется по всей странице,
// включая саму экранную клавиатуру, кнопки checkbox, клавишу подтверждения и клавишу выхода со страницы

export function ScreenKeyboardPage() {
    const phoneNumber = useSelector((state) => state.phoneNumber);
    const {section, activeElem} = useSelector((state) => state.screenKeyboard);
    const validNumber = useSelector((state) => state.validNumber);
    const [checkedAgree, setCheckedAgree] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    // Здесь мы отслеживаем какие клавиши были нажаты
    // логика обработки нажатий хранится в redux
    const keyDownHandle = useCallback((e) => {
        // нажатие клавиш стрелок
        if (e.key === 'ArrowRight') dispatch(arrowRightAction());
        if (e.key === 'ArrowLeft') dispatch(arrowLeftAction());
        if (e.key === 'ArrowUp') dispatch(arrowUpAction());
        if (e.key === 'ArrowDown') dispatch(arrowDownAction());

        // нажатие Enter
        if (e.key === 'Enter') {
            if (section === 'keyboards') {
                (activeElem === 'стереть') ? dispatch(deleteNumber()) : dispatch(addNumber(activeElem));
            }
            if (section === 'radio') return setCheckedAgree((!checkedAgree));
            if (section === 'confirmNumber' && checkedAgree && phoneNumber.length === 10) {
                return history.push('/slider');
            }
        }
        // нажатие клавиш с цифрами
        if (!isNaN(Number(e.key)) && e.code !== 'Space') {
            if (phoneNumber.length === Number(10)) return;
            dispatch(setActiveElement({section: 'keyboards', activeElem: Number(e.key)}));
            dispatch(addNumber(Number(e.key)));
            return;
        }

        // нажатие пробела
        if (e.code === 'Space' && e.key === ' ' && phoneNumber.length > Number(0)) return dispatch(deleteNumber());

    }, [activeElem, checkedAgree, dispatch, history, phoneNumber.length, section]);

    // Здесь делаем запрос на валидацию
    const validRequest = useCallback(() => {
        dispatch(requestValidNumber(Number(phoneNumber.join(''))))
    }, [dispatch, phoneNumber])

    useEffect(() => {
        if (phoneNumber.length === 10) {
            validRequest()
        }
    }, [phoneNumber.length, validRequest]);

    // Здесь мы отслеживаем нажатие клавиш на этой странице
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
                   valid={(validNumber.data) ? validNumber.data.valid : null}
            />
            <div className={'ImageInfoBlock'}/>
            <CancelButton activeElem={activeElem}/>
            <img className={'qrCodeInfo'} src={'../qrCodeInfo.png'} alt="qr-code"/>
        </div>
    )
}