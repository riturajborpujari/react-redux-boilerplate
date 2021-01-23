import { AUTH_SIGNIN, AUTH_SIGNOUT } from '../actionTypes';

const SignIn = (user) => ({
  type: AUTH_SIGNIN,
  payload: user
});

const SignOut = () => ({
  type: AUTH_SIGNOUT,
})

export { SignIn, SignOut };