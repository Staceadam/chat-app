//actionCreator to update a new message, takes in the content object as an argument
export const updateNewMessage = content => {
  //returns an object with a type of 'UPDATE_NEW_MESSAGE', and the content object
  return {
    type: 'UPDATE_NEW_MESSAGE',
    content
  };
};

//actionCreator to clear a new message
export const clearNewMessage = () => {
  //returns an object with a type of 'CLEAR_NEW_MESSAGE'
  return {
    type: 'CLEAR_NEW_MESSAGE'
  };
};
