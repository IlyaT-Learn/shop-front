import React, {useCallback} from 'react';
import styles from './Header.module.scss'
import HNavButton from '../../atoms/HNavButton/HNavButton';
import HLogo from '../../atoms/HLogo/HLogo';
import UnitWithSearchField from '../../atoms/HUnitWithSearchField/UnitWithSearchField';
import HRegisterOrSignInButton from '../../atoms/HRegisterOrSignInButton/HRegisterOrSignInButton'
import {useHistory} from 'react-router';

const Header = () => {
    const history = useHistory();

    const handleContactClick = useCallback(() => {
        history.push('/contact_us');
    },[history]);

    const handleLogoClick = useCallback(() => {
        history.push('/');
    },[history]);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.unitWithMenu}>
                <div className={styles.menu}>
                    <HNavButton onClick={handleContactClick}>Контакты</HNavButton>
                    <HNavButton>Филиалы</HNavButton>
                    <HNavButton>Блог</HNavButton>
                </div>
            </div>
            <div className={styles.searchUnit}>
                <HLogo onClick={handleLogoClick}/>
                <UnitWithSearchField/>
                <HRegisterOrSignInButton/>
            </div>
        </div>
    );
}

export default Header;
