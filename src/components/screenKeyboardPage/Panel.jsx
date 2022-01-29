import React from "react";
import {ScreenKeyboard} from "./ScreenKeyboard";

export function Panel() {
    return(
        <div className={'Panel'}>
            <p className={'panelHeader'}>Введите ваш номер мобильного телефона</p>
            <p className={'phone'}>+7(___)___-__-__</p>
            <p className={'infoText'}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <ScreenKeyboard />
            <div className={'agreeBlock'}>
                <input id={'radio'} className={'agreeRadio'} type={'checkbox'}/>
                <label className={'labelRadio'} htmlFor={'radio'}>Согласие на обработку персональных данных</label>
            </div>
            <button className={'confirmNumber'} disabled={true}>Подтвердить номер</button>
        </div>
    )
}