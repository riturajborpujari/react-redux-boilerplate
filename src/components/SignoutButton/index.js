import { useDispatch } from 'react-redux';
import { useState } from 'react';

import * as AuthActions from '../../redux/actions/Auth';
import Auth from '../../services/Auth';
import Button from '../../components/Button';

const Signout = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);

  const onClick = () => {
    setSubmitting(true);
    Auth.signout(_ => {
      dispatch(AuthActions.SignOut());
    })
  }

  return <Button
    onClick={onClick}
    bg="#888"
    color="#FFF"
    rounded
    disabled={isSubmitting}
  >Sign Out</Button>
}

export default Signout;