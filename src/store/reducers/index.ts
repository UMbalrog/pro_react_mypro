import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import testreducer from './test.reducer';
import { History } from 'history';

const createRootReducer = (history: History) => 
combineReducers({
  test: testreducer,
  router: connectRouter(history)
});

export default createRootReducer;