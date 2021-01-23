import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => <Redirect to={{pathname: '/signin'}} />;

export default PrivateRoute;