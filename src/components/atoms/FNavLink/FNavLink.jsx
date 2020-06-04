import React from 'react';
import styles from './FNavLink.module.scss';
import cn from 'classnames';
import Arrow from '../Arrow/Arrow';

const FNavLink = ({children, className, onClick}) => (
    <div className={cn(styles.navLink, className)} onClick={onClick}>
        <Arrow className={styles.arrowColor}/>
        <p className={styles.nameOfNavLink}>{children}</p>
    </div>
);

export default FNavLink;
