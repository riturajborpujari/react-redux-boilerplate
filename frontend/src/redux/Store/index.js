import * as Redux from 'redux';
import reducers from '../reducers';

const store = Redux.createStore(reducers);

export default store;