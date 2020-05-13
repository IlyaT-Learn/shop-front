import React, {useCallback, useEffect} from "react";
import LoginPage from "../page/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_ASYNC_REQUEST} from "../action/login.action"
import {useHistory} from "react-router-dom";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loginState = useSelector(({login}) => login);
    const loginSubmitRequestResult = loginState.submitRequest.result;

    const handleFetchRequest = useCallback((data) => {
        dispatch(LOGIN_ASYNC_REQUEST(data));
    }, [dispatch]);

    useEffect(() => {
        if (loginSubmitRequestResult === true) {
            history.push('/main');
        }
    })

    return (
        <LoginPage onSubmitRequest={handleFetchRequest}/>
    );
}

export default LoginContainer;