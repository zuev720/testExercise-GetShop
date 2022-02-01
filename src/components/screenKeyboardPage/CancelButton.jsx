import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

export function CancelButton(props) {
    const ref = useRef(null);

    const {activeElem} = props;

    useEffect(() => {
        if (ref.current !== null) ref.current.focus();
    }, [activeElem]);

    return (
        <Link
            ref={(activeElem === 'CancelButton') ? ref : null}
            className={'CancelButton'} to={'/'}
        />
    )
}