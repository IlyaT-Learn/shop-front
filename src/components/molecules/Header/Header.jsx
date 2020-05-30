import React from 'react';
import styles from './Header.module.scss'
import HNavButton from '../../atoms/HNavButton/HNavButton';
import HLogo from '../../atoms/HLogo/HLogo';
import UnitWithSearchField from '../../atoms/HUnitWithSearchField/UnitWithSearchField';
import HRegisterOrSignInButton from '../../atoms/HRegisterOrSignInButton/HRegisterOrSignInButton'

const Header = () => (
    <div className={styles.headerContainer}>
        <div className={styles.unitWithMenu}>
            <div className={styles.menu}>
                <HNavButton>Контакты</HNavButton>
                <HNavButton>Филиалы</HNavButton>
                <HNavButton>Блог</HNavButton>
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
