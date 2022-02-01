import React, {useEffect, useRef, useState} from "react";

export function ButtonConfirmNumber(props) {
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
    }, [activeElem]);
    console.log(disabled)
    return(
        <button
            ref={(activeElem === 'ButtonConfirmNumber') ? ref : null}
            className={'ButtonConfirmNumber'}
            disabled={disabled}>Подтвердить номер</button>
    )
}