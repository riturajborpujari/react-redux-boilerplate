import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/Store';
import Homepage from './containers/Homepage';
import PrivateRoute from './components/PrivateRoute';
import SigninForm from './containers/Auth/SigninForm';
import Box from './components/Box';

function App() {
  return (
    <Box padding={4}>
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
    </Box>
  );
}

export default App;
