import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRehnTt3Nv1dt2T5aAq6tlXz6IOzrHm78',
  authDomain: 'social-animals-b96a6.firebaseapp.com',
  databaseURL: 'https://social-animals-b96a6.firebaseio.com',
  projectId: 'social-animals-b96a6',
  storageBucket: 'social-animals-b96a6.appspot.com',
  messagingSenderId: '83749675349'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
