import React, { PropTypes } from 'react';
import './SignIn.css';

//pass in the signIn actionCreator as a prop and destructure it to equal itself
const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      {/* assign the signIn actionCreator to an onClick event attribute */}
      <button className="block" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
