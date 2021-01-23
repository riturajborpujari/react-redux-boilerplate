import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Homepage from './pages/Homepage';
import PrivateRoute from './components/general/PrivateRoute';
import SigninForm from './components/Auth/Signin';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/signin" component={SigninForm} />
          <PrivateRoute path="/">
            <Homepage />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
