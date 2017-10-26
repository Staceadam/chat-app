import { connect } from 'react-redux';
import Application from '../components/Application';
import { signIn, signOut } from '../actions/auth';

//destructure auth as auth and pass it as an argument to the mapStateToProps function
const mapStateToProps = ({ auth }) => {
  //return an object with the passed in auth
  return { auth };
};

//pass in thunks async dispatch function into the mapDispatchToProps function
const mapDispatchToProps = dispatch => {
  //return an object with the signIn/signOut actionCreators and then pass in
  //a dispatch set to each actionCreator
  return {
    signIn() {
      dispatch(signIn());
    },
    signOut() {
      dispatch(signOut());
    }
  };
};

//connect helper function that takes mapStateToProps and mapDispatchToProps as arguments in the first-
//set of parenthesis, and the Component its getting bound to in the second set of parenthesis
export default connect(mapStateToProps, mapDispatchToProps)(Application);
