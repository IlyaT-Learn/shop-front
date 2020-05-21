import React from 'react';
import styles from './Loader.module.scss';
import cn from 'classnames';

const Loader = ({ show }) => (
  <div className={cn(styles.loaderContainer, {
    [styles.hide]: !show
  })}>Загрузка...</div>
);

export default Loader;
