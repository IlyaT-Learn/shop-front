import React from 'react';
import styles from './FMainUnit.module.scss';
import cn from 'classnames';

const FMainUnit = ({children, className}) => (
    <div className={cn(styles.fMainUnit, className)}>
        <div  className={styles.container}>
            {children}
        </div>
    </div>
);

export default FMainUnit;
