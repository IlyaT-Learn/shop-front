import React, {useCallback, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {TextField} from '@material-ui/core';
import styles from '../LoginPage/LoginPage.module.scss';
import {FAILURE} from '../../constants/request.constants';

const LoginPage = ({onSubmitRequest, loginSubmitRequestStatus}) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail]);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword]);

    const handleLoginClick = useCallback(() => {
        let loginObject = {
            email,
            password
        }
        onSubmitRequest(loginObject)
    }, [onSubmitRequest, email, password]);

    const handleContinueClick = useCallback(() => {
        history.push('/registration');
    }, [history.push]);

    return (
        <div className={styles.container}>
            <div className={styles.firstBlock}>
                <label>New Customer</label>
                <label>Register Account</label>
                <label>By creating an account you will be able to shop faster, be up to date on an order's status, and
                    keep track of the orders you have previously made.</label>
                <button onClick={handleContinueClick}>Continue</button>
            </div>
            <div className={styles.secondBlock}>
                <label>Returning Customer</label>
                <label>I am a returning customer</label>
                <TextField
                    value={email}
                    onChange={handleEmailChange}
                    label="E-Mail Address"
                    variant="outlined"
                />
                <TextField
                    value={password}
                    onChange={handlePasswordChange}
                    label="Password"
                    variant="outlined"
                />
                <button onClick={handleLoginClick}>LOGIN</button>
                {loginSubmitRequestStatus === FAILURE ? <div className={styles.error}>Login Error!</div> : null}
            </div>
        </div>
    );
};

export default LoginPage;
