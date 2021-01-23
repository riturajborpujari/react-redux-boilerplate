const fakeUser = {
  name: 'Test User',
  email: 'test@test.com'
};

const FakeAuth = {
  isAuthenticated: false,
  signin: (cb) => {
    setTimeout(cb, 1000, fakeUser);
  },
  signout: cb => {
    setTimeout(cb, 1000);
  }
}

export default FakeAuth;