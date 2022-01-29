import React from "react";

export function ScreenKeyboard() {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'стереть', 0];

    const KeyboardKey = (props) => {
        return(
            <div className={'KeyboardKey'}>{props.elem}</div>
        )
    }

    return(
        <div className={'ScreenKeyboard'}>
            {values.map((elem) => <KeyboardKey key={elem} elem={elem} />)}
        </div>
    )
}