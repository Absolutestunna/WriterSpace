import ActionTypes from '../Home/home-ActionTypes';
import database from '../../database';

export function getStories() {
  return dispatch => {
    // dispatch(getInviteRequestedAction());
    return database.ref('/').once('value', snap => {
      const stories = snap.val();
      dispatch(getAllStories(stories))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getAllStoriesRejectedAction());
    });
  }
}

// function getStoriesRequestedAction() {
//   return {
//     type: ActionTypes.GetStoriesRequested
//   };
// }

function getAllStoriesRejectedAction() {
  return {
    type: ActionTypes.GetStoriesRejectionAction
  }
}

function getAllStories(stories) {
  return {
    type: ActionTypes.GetStoriesFulfilledAction,
    stories
  };
}
