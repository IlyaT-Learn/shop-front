import React from 'react';
import styles from './HNavButton.module.scss'

const HNavButton = ({children}) => (
    <a className={styles.navButton}>{children}</a>
);

export default HNavButton;
