import React from 'react';
import styles from './Header.module.scss'
import NavButton from './NavButton';
import Logo from './Logo';
import UnitWithSearchField from './UnitWithSearchField';
import RegisterOrSignInButton from "./RegisterOrSignInButton";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.unitWithMenu}>
                <div className={styles.invisibleUnit}/>
                <div className={styles.menu}>
                    <NavButton nameOfTheButton={'Contact'}/>
                    <NavButton nameOfTheButton={'Affiliate '}/>
                    <NavButton nameOfTheButton={'Blogs'}/>
                </div>
            </div>
            <div className={styles.searchUnit}>
                <Logo/>
                <UnitWithSearchField/>
                <RegisterOrSignInButton/>
            </div>
        </div>
    );
};

export default Header;