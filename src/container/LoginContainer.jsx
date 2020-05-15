import React, {useCallback, useEffect} from 'react';
import LoginPage from '../page/LoginPage/LoginPage';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_REQUEST} from '../action/login.action'
import {useHistory} from 'react-router-dom';
import {SUCCESS} from '../constants/request.constants';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loginState = useSelector(({login}) => login);
    const loginSubmitRequestStatus = loginState.submitRequest.status;

    const handleFetchRequest = useCallback((data) => {
        dispatch(LOGIN_REQUEST(data));
    }, [dispatch]);

    useEffect(() => {
        if (loginSubmitRequestStatus === SUCCESS) {
            history.push('/main');
        }
    },[loginSubmitRequestStatus]);

    return (
        <LoginPage onSubmitRequest={handleFetchRequest}
                   loginSubmitRequestStatus={loginSubmitRequestStatus}/>
    );
}

export default LoginContainer;
