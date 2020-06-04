import styles from './Logo.module.scss';
import React from 'react';

const Logo = ({onClick}) => {
    return (
        <div className={styles.logo} onClick={onClick}>
            <div className={styles.circle}/>
            <p className={styles.nameOfTheMarket}>...<strong>i</strong>Market...</p>
        </div>
    );
}

export default Logo;
