import './App.css';

function App() {
    return (
        <div className="App">
            <div className={'screenWrapper'}>
                <div className={'screen'}>
                    <iframe width="100%" height="100%"
                            className={'video'}
                            src="https://www.youtube-nocookie.com/embed/M7FIvfx5J10?autoplay=1&mute=1&loop=1&playlist=M7FIvfx5J10&controls=0&fs=0&showinfo=0&modestbranding=1"
                            title="YouTube video player" frameBorder="0"
                            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <div className={'banner'}>
                        <div className={'bannerFrame'}>
                            <h5 className={'bannerHeader'}>исполните мечту вашего малыша!
                                подарите ему собаку!
                            </h5>
                            <img className={'qr-code'} src={'./images/qr-code.png'} alt="qr-code"/>
                            <p className={'bannerText'}>Сканируйте QR-код или нажмите ОК</p>
                            <button className={'bannerButton'}>ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;