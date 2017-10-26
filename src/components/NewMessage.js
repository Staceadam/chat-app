import React, { PropTypes } from 'react';
import './NewMessage.css';

//pass in the auth object/ newMessage, handleChange, handleSubmit actionCreators-
//as props and destructure them to equal themselves
const NewMessage = ({ newMessage, auth, handleChange, handleSubmit }) => (
  <form
    className="NewMessage"
    // assign a callback function that runs the handleSubmit actionCreator that was passed in as props
    // and takes event, the newMessage actionCreator, and uid from the auth object to the onSubmit
    // event attribute
    onSubmit={event => handleSubmit(event, newMessage, auth.uid)}
  >
    <label>
      <input
        className="NewMessage--content"
        type="text"
        placeholder="What's on your mind?"
        //pass in the newMessage actionCreator as a value prop, and the handleChange actoinCreator-
        //to the onChange event attribute
        value={newMessage}
        onChange={handleChange}
      />
      <input
        className="NewMessage--submit block"
        type="submit"
        value="Post"
        //disalbe submit if thew newMessage actionCreator doesn't have anything in it
        disabled={!newMessage.length}
      />
    </label>
  </form>
);

NewMessage.propTypes = {
  newMessage: PropTypes.string,
  auth: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default NewMessage;
