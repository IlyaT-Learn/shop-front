import React from "react";
import styles from './Header.module.scss'
import {unstable_renderSubtreeIntoContainer} from "react-dom";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.unitWithMenu}>
                <div className={styles.invisibleUnit}/>
                <div className={styles.menu}>
                    <a>Contact</a>
                    <a>Affiliate </a>
                    <a>Blogs</a>
                </div>
            </div>
            <div className={styles.searchUnit}>
                <div className={styles.logo}>
                    <div className={styles.circle}/>
                    <p className={styles.nameOfTheMarket}><strong>m</strong>artech</p>
                </div>
                <div className={styles.unitWithSearchField}>
                    <input placeholder="Search Products Here" className={styles.searchField}/>
                    <a className={styles.searchButton}/>
                </div>
                <a className={styles.registerButton}>Register && sign in</a>
            </div>
        </div>
    );
};

export default Header;