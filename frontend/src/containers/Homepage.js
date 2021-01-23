import Greeting from '../components/Greeting';
import SignoutButton from '../components/Auth/Signout';

const Homepage = () => {
  return (
    <div>
      <Greeting name="User" />

      <SignoutButton />
    </div>
  )
}

export default Homepage;