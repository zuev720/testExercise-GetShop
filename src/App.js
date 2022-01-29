import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import {PromoPage} from "./components/promoPage/PromoPage";
import {ScreenKeyboardPage} from "./components/screenKeyboardPage/ScreenKeyboardPage";

function App() {
    return (
        <div className="App">
            <Router>
                <div className={'screenWrapper'}>
                    <Switch>
                        <Route path={'/keyboard-screen'}>
                            <ScreenKeyboardPage/>
                        </Route>
                        <Route path={'/'}>
                            <PromoPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;