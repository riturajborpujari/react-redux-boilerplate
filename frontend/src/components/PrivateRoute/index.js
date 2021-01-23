import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const { isSignedIn } = useSelector(state => state.auth);

  return <Route
    {...rest}
    render={() =>
      isSignedIn ?
        children :
        <Redirect to={{ pathname: '/signin' }} />
    }
  />
}

export default PrivateRoute;