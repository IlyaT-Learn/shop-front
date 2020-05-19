import styles from "./Header.module.scss";
import React from "react";

const RegisterOrSignInButton = () => {
    return (
        <a className={styles.registerButton}>Register && sign in</a>
    );
};

export default RegisterOrSignInButton;
