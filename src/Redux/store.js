import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


// The User Reducer
const userReducer = function(state = {}, action) {
  return state;
}

// The Widget Reducer
const widgetReducer = function(state = {}, action) {
  return state;
}

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer,
  widgetState: widgetReducer,
  routing: routerReducer

});

const store = createStore(reducers);

export default store;
