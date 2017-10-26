import { database } from '../firebase';

//store a reference to the databases users node as usersRef
const usersRef = database.ref('users');

//actionCreator to add a new user, takes in user as an argument
export const addUser = user => {
  //returns an object with a type of 'ADD_USER' and properties of displayName, uid, photoURL set-
  //to the passed in user objects associated keys
  return {
    type: 'ADD_USER',
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

//actionCreator that listens for users
export const startListeningForUsers = () => {
  //returns an object with thunks async dispatch function as an argument
  return dispatch => {
    //grab the stored reference to the users node and use firebases on listener to fire off-
    //when a child node is added which will return a callback function with a reference to that-
    //node object stored as snapshot, use thunks async dispatch function to fire of the addUser-
    //actionCreator with an argument of the returned snapshot objects value
    usersRef.on('child_added', snapshot => {
      dispatch(addUser(snapshot.val()));
    });
  };
};
