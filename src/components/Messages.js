import React, { PropTypes } from 'react';
import Message from './Message';
import map from 'lodash/map';
import './Messages.css';

//pass in auth/messages/users as objects, the deleteMessage actionCreator as props-
//from state and destructure them to be equal to themselves
const Messages = ({ auth, messages, users, deleteMessage }) => (
  <section className="Messages">
    {/* use lodashs map method to iterate over each element within the messages objects-
    and take message as the value argument and key as the index argument, this will return a new object */}
    {map(messages, (message, key) => (
      // render the Message Component
      <Message
        // pass in a prop of key and id both equal to the key index
        key={key}
        id={key}
        // spread any additional properties from message as props
        {...message}
        //pass in the users object with a key set to uid from message as a user prop
        user={users[message.uid]}
        //if auth.uid and message.uid both equal the auth.uid pass in true to the belongsToCurrentUser prop
        belongsToCurrentUser={auth.uid && message.uid === auth.uid}
        //pass in the deleteMessage actionCreator with the key index from messages and assign it to a deleteMessage prop
        deleteMessage={deleteMessage(key)}
      />
    ))}
  </section>
);

Messages.propTypes = {
  auth: PropTypes.object,
  messages: PropTypes.object,
  users: PropTypes.object,
  deleteMessage: PropTypes.func
};

export default Messages;
