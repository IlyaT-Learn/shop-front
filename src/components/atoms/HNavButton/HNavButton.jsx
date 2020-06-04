import React from 'react';
import styles from './HNavButton.module.scss'

const HNavButton = ({children, onClick}) => (
    <a className={styles.navButton} onClick={onClick}>{children}</a>
);

export default HNavButton;
