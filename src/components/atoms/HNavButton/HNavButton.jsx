import React from 'react';
import styles from './HNavButton.module.scss'

const HNavButton = ({children, onClick}) => (
    <span className={styles.navButton} onClick={onClick}>{children}</span>
);

export default HNavButton;
