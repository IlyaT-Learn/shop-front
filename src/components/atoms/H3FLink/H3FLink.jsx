import React from 'react';
import cn from 'classnames';
import styles from './H3FLink.module.scss';

const H3FLink = ({children, className}) => (
    <h3 className={cn(styles.link, className)}>{children}</h3>
);

export default H3FLink;
