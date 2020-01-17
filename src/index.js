import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createHashHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {appReducer} from './reducers';

import './static/fonts/raleway.css';
import './static/fonts/life-savers.css';
import './static/fonts/monoton.css';
import './static/fonts/press-start-2p.css';
import './static/fonts/sigmar-one.css';

const history = createHashHistory();

const createStoreWithMiddleware = applyMiddleware(
  routerMiddleware(history),
  thunk
)(createStore);
export const store = createStoreWithMiddleware(appReducer(history));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
