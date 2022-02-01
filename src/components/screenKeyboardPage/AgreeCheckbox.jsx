import React, {useEffect, useRef} from 'react';

export function AgreeCheckbox(props) {
    const ref = useRef(null);
    const {activeElem, checkedAgree, setCheckedAgree} = props;

    useEffect(() => {
        if (ref.current !== null) ref.current.focus();
    }, [activeElem]);

    return (
        <div className={'AgreeCheckbox'}>
            <div className={'inputWrapper'}>
                {(activeElem === 'Radio')
                    ? < input
                        ref={ref}
                        id={'radio'}
                        className={'radio'}
                        type={'checkbox'}
                        checked={checkedAgree}
                        onChange={() => setCheckedAgree((!checkedAgree))}/>
                    : < input id={'radio'}
                              className={'radio'}
                              type={'checkbox'}
                              checked={checkedAgree}
                              onChange={() => setCheckedAgree((!checkedAgree))}/>
                }
            </div>
            <label className={'labelRadio'} onClick={() => setCheckedAgree((!checkedAgree))}>Согласие на обработку персональных данных</label>
        </div>
    )
}
