import React, { PropTypes } from 'react';
import MessagesContainer from '../containers/MessagesContainer';
import NewMessageContainer from '../containers/NewMessageContainer';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import Loading from './Loading';
import './Application.css';

//pass in the auth/signIn/signOut props and destructor them as the same name
const Application = ({ auth, signIn, signOut }) => {
  return (
    <main className="Application">
      <div className="Application--sidebar">
        {/* if the current Applications state of the status key inside the auth object is 'ANONYMOUS', render-
        the SignIn Component and pass in the signIn actionCreator as a prop */}
        {auth.status === 'ANONYMOUS' && <SignIn signIn={signIn} />}
        {/* if the current Applications state of the status key inside the auth object is 'SIGNED_IN', render-
        the CurrentUser Component and pass in the auth object and signOut actionCreator as props */}
        {auth.status === 'SIGNED_IN' && (
          <CurrentUser auth={auth} signOut={signOut} />
        )}
        {/* if the current Applications state of the status key inside the auth object is 'SIGNED_IN', render-
        the NewMessageContainer Container Component which will mapStateToProps/mapDispatchToProps */}
        {auth.status === 'SIGNED_IN' && <NewMessageContainer />}
        {/* if the current Applications state of the status key inside the auth object is 'AWAITING_AUTH_RESPONSE', render-
        the Loading Component */}
        {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
      </div>
      {/* render the MessagesContainer Container Component which will mapStateToProps/mapDispatchToProps */}
      <MessagesContainer />
    </main>
  );
};

Application.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Application;
