import React, {useCallback} from 'react';
import styles from './HRegisterOrSignInButton.module.scss';
import {useHistory} from 'react-router-dom';
import newUser from '../../../image/newUser.png';

const RegisterOrSignInButton = ({login}) => {
    const history = useHistory();

    const handleLoginClick = useCallback(() => {
        history.push('/login');
    }, [history]);

    const handleRegisterClick = useCallback(() => {
        history.push('/register');
    }, [history]);

    return (
        <div className={styles.regAndLoginContainer}>
            <span className={styles.HButton} onClick={!login ? handleLoginClick : null}>
                {login ? login : 'Вход & Регистрация'}
            </span>
            <img src={newUser} className={styles.HButton} onClick={handleRegisterClick} alt="new user icon"/>
        </div>
    );
};

export default RegisterOrSignInButton;
