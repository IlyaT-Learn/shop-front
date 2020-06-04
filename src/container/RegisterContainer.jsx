import React, {useCallback} from 'react';
import RegisterPage from '../page/RegisterPage/RegisterPage';
import {REGISTER_REQUEST} from '../action/register.action';
import {useDispatch, useSelector} from 'react-redux';
import {REQUEST} from '../constants/request.constants';

const RegisterContainer = () => {
    const dispatch = useDispatch();
    const registerRequestStatus = useSelector(({register: {registerRequest: {status}}}) => status);
    const registerRequestLoaderShow = registerRequestStatus === REQUEST;

    const handleRegisterClick = useCallback((params) => dispatch(REGISTER_REQUEST(params)), [dispatch]);

    return (
        <RegisterPage onRegisterClick={handleRegisterClick} registerRequestLoaderShow={registerRequestLoaderShow}/>
    );
};

export default RegisterContainer;
