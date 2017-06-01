import ActionTypes from './home-ActionTypes';


export const getStoriesReducer = function(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetStoriesFulfilledAction:
      return Object.assign({}, state, {
       storiesList: action.stories
     })
    default:
      return state;
  }
}
