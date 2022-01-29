import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {PromoPage} from "./components/promoPage/PromoPage";
import {ScreenKeyboardPage} from "./components/screenKeyboardPage/ScreenKeyboardPage";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
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
            </Router>
        </div>
    );
}

export default App;