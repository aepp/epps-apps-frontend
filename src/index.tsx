import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, AnyAction} from 'redux';
import {HashRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';

import './static/fonts/raleway.css';
import './static/fonts/life-savers.css';
import './static/fonts/monoton.css';
import './static/fonts/press-start-2p.css';
import './static/fonts/sigmar-one.css';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  sagaMiddleware
)(createStore);

// @ts-ignore
export const store = createStoreWithMiddleware(rootReducer());

export type GetState = typeof store.getState;

export const action = (type: string, payload?: object): AnyAction =>
  store.dispatch({type, payload});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
