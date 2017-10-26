import { connect } from 'react-redux';
import NewMessage from '../components/NewMessage';
import { updateNewMessage, clearNewMessage } from '../actions/new-message';
import { createMessage } from '../actions/messages';

//pass in the newMessage/ auth object from state and destructure them as themselves
const mapStateToProps = ({ newMessage, auth }) => {
  //return an object containing the passed in newMessage/auth from Application state
  return { newMessage, auth };
};

//pass in thunks async dispatch function into the mapDispatchToProps function
const mapDispatchToProps = dispatch => {
  //return an object
  return {
    //event handler that fires off on change and takes in the event object as an argument
    handleChange(event) {
      //use thunks async dispatch function to send the updateNewMessage actionCreator
      //with the pulled of target.value from the passed in event object as as argrument
      dispatch(updateNewMessage(event.target.value));
    },
    //event handler that fires off on submit and takes in the event, content and uid objects
    //as arguments
    handleSubmit(event, content, uid) {
      //prevent the submit from doing stupid things
      event.preventDefault();
      //use thunks async dispatch function to send the createMessage actionCreator with
      //destructured content/uid objects as arguments
      dispatch(createMessage({ content, uid }));
      //use thunks async disptach function to send the clearNewMessage actionCreator
      dispatch(clearNewMessage());
    }
  };
};

//connect helper function that takes mapStateToProps and mapDispatchToProps as arguments in the first-
//set of parenthesis, and the Component its getting bound to in the second set of parenthesis
export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
