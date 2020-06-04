import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import history from './router/history';
import initStore, {sagaMiddleware} from './store-config/store';
import DevTools from './store-config/devtools';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import exampleSaga from './saga/example.saga';
import loginSaga from './saga/login.saga';
import registerSaga from './saga/register.saga';
import contactUs from './saga/contactUs.saga';
import menuSaga from './saga/menu.saga';
import foodFieldSaga from './saga/foodField.saga';

const store = initStore();
const devTools = process.env.NODE_ENV === 'development' ? <DevTools/> : null;

sagaMiddleware.run(exampleSaga);
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);
sagaMiddleware.run(contactUs);
sagaMiddleware.run(menuSaga);
sagaMiddleware.run(foodFieldSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
            {devTools}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
