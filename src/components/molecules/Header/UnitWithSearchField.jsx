import React from 'react';
import styles from "./Header.module.scss";
import SendButton from "../Footer/SendButton";

const UnitWithSearchField = () => {
    return (
        <div className={styles.unitWithSearchField}>
            <input placeholder="Search Products Here" className={styles.searchField}/>
            <SendButton/>
        </div>
    );
};

export default UnitWithSearchField;