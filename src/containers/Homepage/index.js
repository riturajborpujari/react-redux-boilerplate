import {Greeting, SignoutButton} from '../../components';

const Homepage = () => {
  return (
    <div>
      <Greeting name="User" />

      <SignoutButton />
    </div>
  )
}

export default Homepage;