import React, {useCallback} from 'react';
import styles from './HRegisterOrSignInButton.module.scss';
import {useHistory} from 'react-router-dom';

const RegisterOrSignInButton = () => {
    const history = useHistory();

    const handleLoginClick = useCallback(() => {
        history.push('/login');
    }, [history]);

    return (
        <div className={styles.regAndLoginContainer}>
            <span className={styles.HButton} onClick={handleLoginClick}>Вход</span>
        </div>
    );
};

export default RegisterOrSignInButton;
