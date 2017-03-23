import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './Redux/storeConfig';
import { syncHistoryWithStore } from 'react-router-redux'

//root url
import App from './App';


//children components
import SportsContainer from './pages/Sports/sports-container';
import LifeContainer from './pages/Life/life-container';
import MusicContainer from './pages/Music/music-container';


//history instance
const history = syncHistoryWithStore(browserHistory, store);


const routeConfig = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/sports" component={SportsContainer} />
        <Route path="/life" component={LifeContainer} />
        <Route path="/music" component={MusicContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routeConfig;
