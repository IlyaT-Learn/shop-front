import React from 'react';
import styles from './FMainUnit.module.scss';
import cn from 'classnames';

const FMainUnit = ({children,className}) => (
    <div className={cn(styles.fMainUnit,className)}>{children}</div>
);

export default FMainUnit;
