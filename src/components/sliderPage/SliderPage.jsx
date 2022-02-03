import React, {useCallback, useEffect, useMemo, useState} from "react";
import './css/index.css';
import {useHistory} from "react-router-dom";

export function SliderPage() {
    const images = useMemo(() => {
        return ['../img1.png', '../img2.png', '../img3.png'];
    }, []);

    const [image, setImage] = useState(images[0]);
    const [buttonLeftClassName, setButtonLeftClassName] = useState('button leftWhite');
    const [buttonRightClassName, setButtonRightClassName] = useState('button rightBlack');
    const history = useHistory();
    const index = images.findIndex((elem) => elem === image);
    const countImages = images.length - 1;

    useEffect(() => {
        if (index === Number(0)) {
            if (buttonLeftClassName !== 'button leftWhite') setButtonLeftClassName('button leftWhite');
            return;
        }
        if (index === countImages) {
            if (buttonRightClassName !== 'button rightWhite') setButtonRightClassName('button rightWhite');
            return;
        }
        if (buttonRightClassName !== 'button rightBlack') setButtonRightClassName('button rightBlack');
        if (buttonLeftClassName !== 'button rightBlack') setButtonLeftClassName('button rightBlack');
    }, [buttonLeftClassName, buttonRightClassName, countImages, index]);

    const handleLeftClick = useCallback(() => {
        if (index !== Number(0)) {
            setImage(images[index - 1]);
        }
    }, [images, index]);

    const handleRightClick = useCallback(() => {
        if (index !== countImages) {
            setImage(images[index + 1]);
        }
    }, [countImages, images, index]);

    const keyDownHandle = useCallback((e) => {
        if (e.key === 'ArrowRight') handleRightClick();
        if (e.key === 'ArrowLeft') handleLeftClick();
    }, [handleLeftClick, handleRightClick]);

    // Здесь мы отслеживаем нажатие клавиш на этой странице
    useEffect(() => {
        document.addEventListener('keydown', keyDownHandle);
        return () => document.removeEventListener('keydown', keyDownHandle);
    }, [keyDownHandle]);

    return (
        <div className={'SliderPage'}>
            <img className={'imageSlider'} src={image} alt="party"/>
            <div className={'arrowsBlock'}>
                <button className={buttonLeftClassName} onClick={handleLeftClick}/>
                <button className={buttonRightClassName} onClick={handleRightClick}/>
            </div>
            <button className={'cancel'} onClick={() => history.push('/')}/>
        </div>
    )
}