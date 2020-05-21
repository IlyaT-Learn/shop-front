import React from 'react';
import styles from './FNavLink.module.scss';
import cn from 'classnames';

const FNavLink = ({children, className}) => (
    <div className={cn(styles.navLink, className)}>
        <i className={styles.arrow}/>
        <p className={styles.nameOfNavLink}>{children}</p>
    </div>
);

export default FNavLink;
