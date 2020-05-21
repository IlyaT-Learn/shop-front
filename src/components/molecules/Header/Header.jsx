import React from 'react';
import styles from './Header.module.scss'
import HNavButton from '../../atoms/HNavButton/HNavButton';
import HLogo from '../../atoms/HLogo/HLogo';
import UnitWithSearchField from '../../atoms/HUnitWithSearchField/UnitWithSearchField';
import HRegisterOrSignInButton from '../../atoms/HRegisterOrSignInButton/HRegisterOrSignInButton'

const Header = () => (
    <div className={styles.headerContainer}>
        <div className={styles.unitWithMenu}>
            <div/>
            <div className={styles.menu}>
                <HNavButton>Contact</HNavButton>
                <HNavButton> Affiliate </HNavButton>
                <HNavButton>Blogs</HNavButton>
            </div>
        </div>
        <div className={styles.searchUnit}>
            <HLogo/>
            <UnitWithSearchField/>
            <HRegisterOrSignInButton/>
        </div>
    </div>
);

export default Header;
