import React from 'react';
import styles from './MCategory.module.scss'
import Arrow from "../Arrow/Arrow";

const Category = ({children}) => (
    <div className={styles.Category}>
        <Arrow className={styles.arrow}/>
        <a className={styles.categoryName}>{children}</a>
    </div>
);

export default Category;
