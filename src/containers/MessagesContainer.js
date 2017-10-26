import { connect } from 'react-redux';
import Messages from '../components/Messages';
import { destroyMessage } from '../actions/messages';

//take messages, users and auth from state and destructure them to equal themselves as an
//argument to the mapStateToProps function
const mapStateToProps = ({ messages, users, auth }) => {
  //return an object with these passed in state arguments as properties
  return { messages, users, auth };
};

//pass thunks async dispatch function as an argument to the mapDispatchToProps function
const mapDispatchToProps = dispatch => {
  //return an object that has a deleteMessage function with key as an argument
  return {
    deleteMessage(key) {
      //return a function that calls the passed in dispatch function with the
      //destroyMessage actionCreator as an argument, and takes key as its own argument
      return () => dispatch(destroyMessage(key));
    }
  };
};

//connect helper function that takes mapStateToProps and mapDispatchToProps as arguments in the first-
//set of parenthesis, and the Component its getting bound to in the second set of parenthesis
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
