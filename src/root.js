import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';
import store from './Redux/store';
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(createBrowserHistory(), store);
console.log('history', history);

const routeConfig = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default routeConfig;
