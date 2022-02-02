import React, {useEffect, useState} from "react";

export function Phone(props) {
    const {phoneNumber, valid} = props;
    const [state, setState] = useState('');
    const [className, setClassName] = useState('phone');

    useEffect(() => {
        if (valid === false && phoneNumber.length === 10) {
            setClassName('phone phoneError');
        } else setClassName('phone');
    }, [phoneNumber.length, valid]);

    // Здесь мы подставляем маску номера телефона
    useEffect(() => {
        let mask = '+7(___)___-__-__';
        phoneNumber.forEach((elem) => mask = mask.replace(/_/, elem));
        setState(mask);
    }, [phoneNumber]);

    return(
        <p className={className}>{state}</p>
    )
}