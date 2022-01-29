import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export function Banner() {
    const history = useHistory();
    const [className, setClassName] = useState('Banner');

    useEffect(() => {
        setTimeout(() => setClassName(className + ' active'), 5000);
    }, []);

    const buttonClick = () => {
        history.push('keyboard-screen');
    };

    return(
        <div className={className}>
            <div className={'bannerFrame'}>
                <h5 className={'bannerHeader'}>исполните мечту вашего малыша! подарите ему собаку!</h5>
                <img className={'qr-code'} src={'./images/qr-code.png'} alt="qr-code"/>
                <p className={'bannerText'}>Сканируйте QR-код или нажмите ОК</p>
                <button className={'bannerButton'} onClick={buttonClick}>ok</button>
            </div>
        </div>
    )
}