import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import example from './example.reducer';
import register from './register.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    example,
    register
  });

export default rootReducer;