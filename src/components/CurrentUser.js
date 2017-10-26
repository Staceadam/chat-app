import React, { PropTypes } from 'react';
import './CurrentUser.css';

//take the auth object and signOut actionCreator as props and destructor them to equal themselves
const CurrentUser = ({ auth, signOut }) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        //pick photoURL/displayName off of the auth object from props
        src={auth.photoURL}
        alt={auth.displayName}
      />
      <div className="CurrentUser--identification">
        {/* pick displayName/email off of the auth object from props */}
        <h3 className="CurrentUser--displayName">{auth.displayName}</h3>
        <p className="CurrentUser--email">{auth.email}</p>
        {/* assign the signOut actoinCreator from props to an onClick event attribute */}
        <button className="CurrentUser--signout" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  auth: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  }),
  signOut: PropTypes.func.isRequired
};

export default CurrentUser;
