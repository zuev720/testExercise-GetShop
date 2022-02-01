import React from "react";
import {ScreenKeyboard} from "./ScreenKeyboard";
import {ButtonConfirmNumber} from "./ButtonConfirmNumber";
import {AgreeCheckbox} from "./AgreeCheckbox";
import {Phone} from "./Phone";

export function Panel(props) {
    const {activeElem, phoneNumber} = props;

    return(
        <div className={'Panel'}>
            <p className={'panelHeader'}>Введите ваш номер мобильного телефона</p>
            <Phone phoneNumber={phoneNumber}/>
            <p className={'infoText'}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <ScreenKeyboard activeElem={activeElem} phoneNumber={phoneNumber}/>
            <AgreeCheckbox activeElem={activeElem} checkedAgree={props.checkedAgree} setCheckedAgree={props.setCheckedAgree}/>
            <ButtonConfirmNumber activeElem={activeElem} checkedAgree={props.checkedAgree} phoneNumber={phoneNumber}/>
        </div>
    )
}