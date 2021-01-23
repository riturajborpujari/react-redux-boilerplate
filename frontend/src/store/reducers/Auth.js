import { AUTH_SIGNOUT, AUTH_SIGNIN } from '../actionTypes';

let user = localStorage.getItem('APP_USER');
if(user){
  user = JSON.parse(user);
}

const initialState = {
  isSignedIn: user? true: false,
  user
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {isSignedIn: true, user: action.payload};
    case AUTH_SIGNOUT:
      return {isSignedIn: false, user: null};
    default:
      return state;
  }
}

export default AuthReducer;