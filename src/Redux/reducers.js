import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { inviteReducer } from './../pages/Home/home-reducer';

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
  routing: routerReducer,
  inviteReducer
});

export default reducers
