import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';
import store from './Redux/storeConfig';
import { syncHistoryWithStore } from 'react-router-redux'

//history instance
const history = syncHistoryWithStore(createBrowserHistory(), store);

const routeConfig = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);

export default routeConfig;
