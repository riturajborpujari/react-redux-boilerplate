import Greeting from '../components/Greeting';

import SigninForm from '../components/Auth/Signin';

const Homepage = () => {
  return(
    <div aria-label="main">
      <Greeting name="User"/>
      <SigninForm />
    </div>
  )  
}

export default Homepage;