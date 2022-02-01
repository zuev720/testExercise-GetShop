import React, {useEffect, useState} from "react";

export function Phone(props) {
    const {phoneNumber} = props;
    const [state, setState] = useState('');

    useEffect(() => {
        let mask = '+7(___)___-__-__';
        phoneNumber.forEach((elem) => mask = mask.replace(/_/, elem));
        setState(mask);
    }, [phoneNumber]);

    return(
        <p className={'phone'}>{state}</p>
    )
}