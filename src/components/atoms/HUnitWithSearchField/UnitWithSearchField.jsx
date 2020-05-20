import React from 'react';
import styles from './HUnitWithSearchField.module.scss';
import SendButton from '../../atoms/SendButton/SendButton';

const UnitWithSearchField = () => (
    <div className={styles.unitWithSearchField}>
        <input placeholder="Search Products Here" className={styles.searchField}/>
        <SendButton/>
    </div>
);

export default UnitWithSearchField;