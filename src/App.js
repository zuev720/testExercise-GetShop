import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {PromoPage} from "./components/promoPage/PromoPage";
import {ScreenKeyboardPage} from "./components/screenKeyboardPage/ScreenKeyboardPage";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Provider store={store}>
                    <div className={'screenWrapper'}>
                        <div className={'screen'}>
                            <Switch>
                                <Route path={'/keyboard-screen'}>
                                    <ScreenKeyboardPage/>
                                </Route>
                                <Route path={'/'}>
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