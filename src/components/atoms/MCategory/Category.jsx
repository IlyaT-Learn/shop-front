import React from 'react';
import styles from './MCategory.module.scss'

const Category = ({children}) => (
    <div className={styles.Category}>
        <img className={styles.image} src="#"/>
        <a>{children}</a>
    </div>
);

export default Category;
