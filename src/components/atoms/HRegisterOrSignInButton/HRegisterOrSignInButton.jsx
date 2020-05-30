import React from 'react';
import styles from './HRegisterOrSignInButton.module.scss';

const RegisterOrSignInButton = () => (
    <div className={styles.regAndLoginContainer}>
        <a className={styles.HButton}><strong>Регистрация</strong></a>
        <p>&</p>
        <a className={styles.HButton}><strong>Вход</strong></a>
    </div>
);

export default RegisterOrSignInButton;
