import React, {forwardRef, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTimeVideo} from "../../store/timeVideoReducer";


export const Banner = forwardRef((props, ref) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [className, setClassName] = useState('Banner');

    useEffect(() => {
        setTimeout(() => setClassName('Banner active'), 5000);
    }, [className]);

    // Здесь мы ловим сколько секунд прошло с начала просмотра и сохраняем его в redux
    // затем осуществляем переход на следующую страницу
    const handleClick = () => {
        const time = ref.current.getCurrentTime();
        dispatch(setTimeVideo(Number(time.toFixed(2))));
        history.push('keyboard-screen');
    };

    return (
        <div className={className}>
            <div className={'bannerFrame'}>
                <h5 className={'bannerHeader'}>исполните мечту вашего малыша! подарите ему собаку!</h5>
                <img className={'qr-code'} src={'./images/qr-code.png'} alt="qr-code"/>
                <p className={'bannerText'}>Сканируйте QR-код или нажмите ОК</p>
                <button className={'bannerButton'} onClick={handleClick}>ok</button>
            </div>
        </div>
    )
})