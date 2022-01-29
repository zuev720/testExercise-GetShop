import React from "react";
import {Link} from "react-router-dom";
import {Panel} from "./Panel";

export function ScreenKeyboardPage() {

    return(
        <div className={'ScreenKeyboardPage'}>
            <Panel />
            <div className={'ImageInfoBlock'} />
            <Link className={'CancelButton'} to={'/'}/>
            <img className={'qrCodeInfo'} src={'images/qrCodeInfo.png'} alt="qr-code"/>
        </div>
    )
}