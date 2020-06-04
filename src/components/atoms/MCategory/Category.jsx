import React, {useCallback} from 'react';
import styles from './MCategory.module.scss'
import Arrow from '../Arrow/Arrow';
import {useHistory} from 'react-router';

const Category = ({data: {name, id}}) => {
    const history = useHistory();

    const handleCategoryClick = useCallback(() => history.push(`/foodField/${id}`), [history, id]);

    return (
        <div className={styles.Category} onClick={handleCategoryClick}>
            <Arrow className={styles.arrowColor}/>
            <span className={styles.categoryName}>{name}</span>
        </div>
    );
};

export default Category;
