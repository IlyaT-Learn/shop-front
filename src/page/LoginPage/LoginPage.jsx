import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {TextField} from '@material-ui/core';
import styles from '../LoginPage/LoginPage.module.scss';
import {FAILURE, REQUEST} from '../../constants/request.constants';
import Button from '@material-ui/core/Button';

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
        };

        onSubmitRequest(loginObject);
    }, [onSubmitRequest, email, password]);

    const handleContinueClick = useCallback(() => {
        history.push('/register');
    }, [history]);

    return (
        <div className={styles.container}>
            <div className={styles.pageBlock}>
                <h2>Новый пользыватель</h2>
                <h3>Зарегистрировать аккаунт</h3>
                <p>Создав аккаунт, вы сможете делать покупки быстрее, быть в курсе статуса заказа и
                    отслеживать заказы, которые вы сделали ранее.</p>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleContinueClick}
                    disabled={loginSubmitRequestStatus === REQUEST}
                >
                    Продолжить
                </Button>
            </div>
            <div className={styles.verticalLine}/>
            <div className={styles.pageBlock}>
                <h2>Постоянный клиент</h2>
                <h3>Я постоянный клиент</h3>
                <div className={styles.textFieldMargin}>
                    <TextField
                        value={email}
                        onChange={handleEmailChange}
                        label="E-Mail Address"
                        variant="outlined"
                    />
                </div>
                <div className={styles.textFieldMargin}>
                    <TextField
                        value={password}
                        onChange={handlePasswordChange}
                        label="Password"
                        variant="outlined"
                    />
                </div>
                <div className={styles.loginButtonContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={loginSubmitRequestStatus === REQUEST}
                        onClick={handleLoginClick}>
                        Войти
                    </Button>
                </div>
                {loginSubmitRequestStatus === FAILURE ? <div className={styles.error}>Login Error!</div> : null}
            </div>
        </div>
    );
};

export default LoginPage;
