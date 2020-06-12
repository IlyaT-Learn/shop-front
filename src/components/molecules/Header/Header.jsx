import React, {useCallback} from 'react';
import styles from './Header.module.scss'
import {useHistory} from 'react-router';
import HNavButton from '../../atoms/HNavButton/HNavButton';
import HLogo from '../../atoms/HLogo/HLogo';
import UnitWithSearchField from '../../atoms/HUnitWithSearchField/UnitWithSearchField';
import HRegisterOrSignInButton from '../../atoms/HRegisterOrSignInButton/HRegisterOrSignInButton'
import SmallCart from '../SmallCart/SmallCart';

const Header = ({login, numberInCart}) => {
    const history = useHistory();
    const handleContactClick = useCallback(() => history.push('/contact_us'), [history]);
    const handleLogoClick = useCallback(() => history.push('/'), [history]);
    const handleCartClick = useCallback(() => history.push('/cart'), [history]);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.unitWithMenu}>
                <div className={styles.menu}>
                    <HNavButton onClick={handleContactClick}>Контакты</HNavButton>
                    <HNavButton onClick={handleContactClick}>Филиалы</HNavButton>
                    <HNavButton>Блог</HNavButton>
                </div>
            </div>
            <div className={styles.searchUnit}>
                <HLogo onClick={handleLogoClick}/>
                <UnitWithSearchField/>
                <HRegisterOrSignInButton login={login}/>
                <SmallCart productsInCartCount={numberInCart} onClick={handleCartClick}/>
            </div>
        </div>
    );
}

export default Header;
