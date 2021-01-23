import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../../store/actions/Auth';
import Auth from '../../services/Auth';

const Signin = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    setSubmitting(true);
    
    Auth.signin(user => {
      dispatch(AuthActions.SignIn(user));
      setSubmitting(false);
    })
  }

  return <button onClick={onSubmit} disabled={isSubmitting}>Sign In</button>;
}

export default Signin;