import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import { App } from './App';

import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeEnhancers());
/* eslint-enable */

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
