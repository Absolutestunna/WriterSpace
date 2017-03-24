import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './Redux/storeConfig';
import { syncHistoryWithStore } from 'react-router-redux'

//root url
import App from './App';


//children components
import Home from './pages/Home/home-container';
import SportsContainer from './pages/Sports/sports-container';
import LifeContainer from './pages/Life/life-container';
import MusicContainer from './pages/Music/music-container';
import FullStoryContainer from './pages/FullStory/fullStory-container';

//history instance
const history = syncHistoryWithStore(browserHistory, store);


const routeConfig = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/sports" component={SportsContainer} />
        <Route path="/life" component={LifeContainer} />
        <Route path="/music" component={MusicContainer} />
        <Route path="/story(/:title)" component={FullStoryContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routeConfig;
