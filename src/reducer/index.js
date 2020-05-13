import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import example from './example.reducer';
import login from './login.reducer';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        example,
        login
    });

export default rootReducer;