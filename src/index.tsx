import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider as StoreProvider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <StrictMode>
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    </StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
