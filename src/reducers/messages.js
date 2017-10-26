import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone';
import omit from 'lodash/omit';

export default function messagesReducer(state = initialState.messages, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      //using lodashs extend to take in an object and iterate over that objects own and inherited properties,
      //lodashs clone is cloning the state object then extend second argument is taking key from the passed
      //in action object and setting it to a key of an object value with propertires of content/timeStamp/uid
      return extend(clone(state), {
        [action.key]: {
          content: action.content,
          timeStamp: action.timeStamp,
          uid: action.uid
        }
      });
    case 'REMOVE_MESSAGE':
      //using lodash omit to return any remaining propteries of a passed in object after its deleted any
      //specific propteries from the second argument. also using lodashs clone to make a copy of the
      //current Application state
      return omit(clone(state), action.key);
    default:
      return state;
  }
}
