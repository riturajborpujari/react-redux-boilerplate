const fakeUser = {
  name: 'Test User',
  email: 'test@test.com'
};

const FakeAuth = {
  isAuthenticated: false,
  signin: (credentials, cb) => {
    /** @todo Validate credentials */
    
    localStorage.setItem('APP_USER', JSON.stringify(fakeUser));
    
    setTimeout(cb, 1000, fakeUser);
  },
  signout: cb => {
    localStorage.removeItem('APP_USER');
    setTimeout(cb, 1000);
  }
}

export default FakeAuth;
