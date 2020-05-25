import React from "react";
import styles from './arrow.module.scss';
import cn from 'classnames';

const Arrow = ({className}) => (
    <i className={cn(className,styles.arrow)}/>
);

export default Arrow;
