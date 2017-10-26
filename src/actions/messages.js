import { database } from '../firebase';

//assign a reference to the messages node from our database to messagesRef
const messagesRef = database.ref('messages');

//actionCreator to add a message, takes in key and a destructored content/uid which sets-
//content = content and uid = uid
export const addMessage = (key, { content, uid }) => {
  //return an object with type 'ADD_MESSAGE', as well as the content/key/uid of the specific message
  return {
    type: 'ADD_MESSAGE',
    content,
    key,
    uid
  };
};

//actionCreator to remove a message, take a key as an argument
export const removeMessage = key => {
  //return an object with a type 'REMOVE_MESSAGE' and the passed in key
  return {
    type: 'REMOVE_MESSAGE',
    key
  };
};

//actionCreator to create a message and take in a destructored content and uid which sets-
//content = content and uid = uid
export const createMessage = ({ content, uid }) => {
  //return a function
  return () => {
    //setting a message variable equal to an object containing the passed in content, ui and a-
    //timeStamp property with a value of the current time
    const message = {
      content,
      uid,
      timeStamp: Date.now()
    };

    //grab the stored reference to the messages node in our database and push this formatted message
    messagesRef.push(message);
  };
};

//actionCreator that delete a message and takes a key as an argument
export const destroyMessage = key => {
  //returns an object that takes thunks async function as an argument
  return dispatch => {
    //grab the stored reference to the messages node in our database, find the child node with the key of-
    //key and remove it from the database, .then will fire off after that resolves and will return a callback-
    //function that will use thunks dispatch aysnc function to fire the removeMessage actionCreator with the-
    //passed in key as an argument
    messagesRef
      .child(key)
      .remove()
      .then(() => {
        dispatch(removeMessage(key));
      });
  };
};

//actionCreator that listens for any changes to messages
export const startListeningForMessages = () => {
  //returns an object with thunks disptach aysnc function as an argument
  return dispatch => {
    //grab the stored reference to the messages node in the database, and use firebases .on listener to-
    //fire off whenever a child node is added to it which will return a callback function with that added-
    //object stored as snapshot, use thunks async dispatch function to send the addMessage actionCreator-
    //with that returned snapshot objects .key and .val() as arguments
    messagesRef.on('child_added', snapshot => {
      dispatch(addMessage(snapshot.key, snapshot.val()));
    });

    //grab the stored reference to the messages node in the database and use firebases .on listener to-
    //fire off whenever a child node is removed which will return a callback function with that removed-
    //object stored as snapshot, use thunks async disptach function to send the removeMessage actionCreator-
    //with the returned snapshot objects .key as an argument
    messagesRef.on('child_removed', snapshot => {
      dispatch(removeMessage(snapshot.key));
    });
  };
};
