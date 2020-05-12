import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import example from './example.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    example
  });

export default rootReducer;