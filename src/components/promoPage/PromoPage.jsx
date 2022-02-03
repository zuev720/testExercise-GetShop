import React, {useRef} from "react";
import ReactPlayer from 'react-player/youtube'
import {Banner} from "./Banner";
import './css/index.css';
import {useSelector} from "react-redux";

export function PromoPage() {
    // Время момента начала видео. Хранится в redux. Начальное значение 0.
    const timeVideo = useSelector((state) => state.timeVideo);
    const ref = useRef();

    return(
        <div className={'PromoPage'}>
            <ReactPlayer
                ref={ref}
                className={'player'}
                width={'100%'}
                height={'100%'}
                url={`https://www.youtube-nocookie.com/embed/M7FIvfx5J10?start=${timeVideo}&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&controls=0`}
                muted={true}
                playing={true}
                loop={true}
                controls={false}/>
            <Banner ref={ref}/>
        </div>
    )
}