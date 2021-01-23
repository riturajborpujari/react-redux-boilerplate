import { AUTH_SIGNOUT, AUTH_SIGNIN } from '../actionTypes';

const initialState = {
  isSignedIn: false,
  user: null
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