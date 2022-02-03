import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {PromoPage} from "./components/promoPage/PromoPage";
import {ScreenKeyboardPage} from "./components/screenKeyboardPage/ScreenKeyboardPage";
import './App.css';
import {SliderPage} from "./components/sliderPage/SliderPage";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router basename={'shopTV'}>
                <Provider store={store}>
                    <div className={'screenWrapper'}>
                        <div className={'screen'}>
                            <Switch>
                                <Route path={'/keyboard-screen'}>
                                    <ScreenKeyboardPage/>
                                </Route>
                                <Route path={'/slider'}>
                                    <SliderPage/>
                                </Route>
                                <Route exact={true} path={'/'}>
                                    <Redirect to={'/'}/>
                                    <PromoPage/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Provider>
            </Router>
        </div>
    );
}

export default App;