import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './Redux/storeConfig';
import { syncHistoryWithStore } from 'react-router-redux'


//root url
import App from './App';


//children components
import Foo from './Foo/Foo';


//history instance
const history = syncHistoryWithStore(createBrowserHistory(), store);

const routeConfig = (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path="/foo" component={Foo}/>
      </App>
    </Router>
  </Provider>
);

export default routeConfig;
