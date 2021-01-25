import { useSelector } from 'react-redux';

const Greeting = () => {
  const {isSignedIn, user} = useSelector(state => state.auth);

  return <h3>Hello, {isSignedIn? user.name: 'Guest'}</h3>;
}

export default Greeting;