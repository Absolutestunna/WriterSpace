/*

  Notes on dev tools: https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83#.l9pzvxwrs

*/

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from './reducers';


const composeEnhancers = composeWithDevTools({
  name: 'WriterSpace DevTools', actionsBlacklist: ['REDUX_STORAGE_SAVE']
});

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
