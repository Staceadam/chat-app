import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Message.css';

//take in the content and user objects/ deleteMessage actionCreator from state as props,
//create a prop call belongsToCurrentUser, destructure these props to equal themselves
const Message = ({ belongsToCurrentUser, content, user, deleteMessage }) => (
  <article
    // use the imported classnames library to join Message and the current-user className if
    //belongsToCurrentUser is true
    className={classNames('Message', { 'current-user': belongsToCurrentUser })}
  >
    <div className="Message--avatar">
      {/* pick the photoURL key off of the user prop */}
      <img role="presentation" src={user.photoURL} />
    </div>
    <div className="Message--main">
      {/* pick the displayName key off of the user prop */}
      <h4 className="Message--user">{user.displayName}</h4>
      {/* render the entire content object from props */}
      <p className="Message--content">{content}</p>
      <footer className="Message--controls">
        {/* if belongsToCurrentUser is true render a button with an onClick event attribute that fires
        off the deleteMessage actionCreator from props */}
        {belongsToCurrentUser && (
          <button className="small destructive" onClick={deleteMessage}>
            Delete
          </button>
        )}
      </footer>
    </div>
  </article>
);

Message.propTypes = {
  belongsToCurrentUser: PropTypes.bool,
  content: PropTypes.string,
  deleteMessage: PropTypes.func,
  id: PropTypes.string,
  timeStamp: PropTypes.number,
  user: PropTypes.object
};

export default Message;
