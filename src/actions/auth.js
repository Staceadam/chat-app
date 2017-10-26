import { auth, database, googleAuthProvider } from '../firebase';
import pick from 'lodash/pick';

//store a reference to our databases users key
const usersRef = database.ref('users');

//actionCreator to handle sign in
export const signIn = () => {
  //return an object with an argument set to thunks dispatch function
  return dispatch => {
    //send thunks dispatch async function containing an object with type: of 'ATTEMPTING_LOGIN'
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    //signInWithPopup using auth and googleAuthProvider
    auth.signInWithPopup(googleAuthProvider);
  };
};

//actionCreator to handle sign out
export const signOut = () => {
  //return an object with an argument set to thunks dispatch function
  return dispatch => {
    //send thunks dispatch async function containing an object with type: of `ATTEMPTING_LOGIN`
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    //use auths signOut method to sign out the user
    auth.signOut();
  };
};

//actionCreator that fires off when a user is signed in, takes user as an argument
const signedIn = user => {
  //returns an object with a type of 'SIGN_IN' and then sets redux state to each specified key
  //and a value taken from the passed in user object returned from auth.onAuthStateChanged
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

//actionCreator that fires off when a user is signed ut
const signedOut = () => {
  //returns an object with a type of 'SIGN_OUT'
  return {
    type: 'SIGN_OUT'
  };
};

//actionCreator that listens to any changes in auth
export const startListeningToAuthChanges = () => {
  //returns an object with thunks disptach async as an argument
  return dispatch => {
    //using firebases auth to check when the auth state changes and grabbing the returned object,
    //then labeling it as user
    auth.onAuthStateChanged(user => {
      //if the user object exists, meaning there is a logged in user
      if (user) {
        //use thunks dispatch async function to fire off the signedIn actionCreator with the picked off
        //user object taken from auth.onAuthStateChanged
        dispatch(signedIn(user));
        //once this dispatch has resolved take our stored users database reference
        usersRef
          //add a child node equal to the user objects uid
          .child(user.uid)
          //use lodashs pick method to take displayName/photoURL/email/uid from the user object, return a new object
          //and then append it as a value to user.uid
          .set(pick(user, ['displayName', 'photoURL', 'email', 'uid']));
        //if the uesr isn't signed in
      } else {
        //use thunks async dispatch function to disptach the signedOut actionCreator
        dispatch(signedOut());
      }
    });
  };
};
