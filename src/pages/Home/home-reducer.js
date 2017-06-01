import ActionTypes from './home-ActionTypes';


export const inviteReducer = function(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetInviteFulfilled:
      return Object.assign({}, state, {
       invitationList: action.invite
     })
    default:
      return state;
  }
}
