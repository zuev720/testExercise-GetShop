import React from "react";
import {ScreenKeyboard} from "./ScreenKeyboard";
import {ButtonConfirmNumber} from "./ButtonConfirmNumber";
import {AgreeCheckbox} from "./AgreeCheckbox";
import {Phone} from "./Phone";

export function Panel(props) {
    const {activeElem, phoneNumber, valid} = props;
    return(
        <div className={'Panel'}>
            <p className={'panelHeader'}>Введите ваш номер мобильного телефона</p>
            <Phone phoneNumber={phoneNumber} valid={valid}/>
            <p className={'infoText'}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <ScreenKeyboard activeElem={activeElem} phoneNumber={phoneNumber} />
            {(valid === false && phoneNumber.length === 10 && <p className={'falseValid'}>Неверно введён номер</p>)
                || <AgreeCheckbox activeElem={activeElem} checkedAgree={props.checkedAgree} setCheckedAgree={props.setCheckedAgree}/>}
            <ButtonConfirmNumber activeElem={activeElem}
                                 checkedAgree={props.checkedAgree}
                                 phoneNumber={phoneNumber}
                                 valid={valid}/>
        </div>
    )
}