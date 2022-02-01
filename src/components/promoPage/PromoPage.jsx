import React from "react";
import ReactPlayer from 'react-player/youtube'
import {Banner} from "./Banner";
import './css/index.css';

export function PromoPage() {

    return(
        <div className={'PromoPage'}>
            <ReactPlayer
                className={'player'}
                width={'100%'}
                height={'100%'}
                url={'https://www.youtube-nocookie.com/embed/M7FIvfx5J10?showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&controls=0'}
                muted={true}
                playing={true}
                loop={true}
                controls={false}/>
            <Banner />
        </div>
    )
}