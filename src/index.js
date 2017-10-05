import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';
import Application from './containers/ApplicationContainer';
import './index.css';

import { messaging } from './firebase';

import { startListeningToAuthChanges } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import { startListeningForMessages } from './actions/messages';

//make an array of middleware to pass into our redux store
const middleware = [thunk];
//make an array of enchancers to pass into our redux store
const enhancers = [];
//check if we are using redx dev tools or compose our store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//use createStore from redux to make our store
const store = createStore(
  //bring in all of the reducers that we made in our reducer folder
  reducer,
  //bring in our initialState object from initial-state.js
  initialState,
  //call our composeEnhancers statement and pass in applyMiddleware to the redux compose
  //which will then apply our middleware and enhancers
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

//reference our store we made and send it our function to start listeningto any auth changes
//so that a user can stay logged in
store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForMessages());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

messaging.onMessage(payload => {
  console.log(payload);
});
