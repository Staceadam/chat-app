import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case 'ADD_USER':
      //using lodashs extend to take in a lodash cloned version of the state object
      //and then add another property with a key of uid picked from the action object
      //with a value of an object containing displayName/email/photoURL keys set with
      //displayName/email/photoURL picked from the action object
      return extend(clone(state), {
        [action.uid]: {
          displayName: action.displayName,
          email: action.email,
          photoURL: action.photoURL
        }
      });
    default:
      return state;
  }
}
