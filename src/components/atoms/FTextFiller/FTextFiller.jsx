import React from 'react';
import styles from './FTextFiller.module.scss';
import cn from 'classnames';

const FTextFiller = ({children, className}) => (
    <p className={cn(styles.textFiller, className)}>{children}</p>
);

export default FTextFiller;
