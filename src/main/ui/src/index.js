import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import store from './store';
import history from './history';
import Start from "./components/Start";
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter basename="/">
                <Start />
            </HashRouter>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();






