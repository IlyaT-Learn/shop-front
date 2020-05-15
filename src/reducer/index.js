import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import example from './example.reducer';
import login from './login.reducer';
import register from './register.reducer';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        example,
        login,
        register
    });

export default rootReducer;
