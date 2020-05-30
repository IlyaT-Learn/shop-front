import styles from './Logo.module.scss';
import React from 'react';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.circle}/>
            <p className={styles.nameOfTheMarket}>...<strong>i</strong>Market...</p>
        </div>
    );
}

export default Logo;
