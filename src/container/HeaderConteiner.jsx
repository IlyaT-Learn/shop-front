import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../components/molecules/Header/Header';

const HeaderContainer = () => {
    const currentUserLogin = useSelector(({login: {submitRequest: {currentUser}}}) => currentUser ? currentUser.login : undefined);
    const numberInCart = useSelector(({cart: {productsInCart}}) => productsInCart.length);

    return (
        <Header login={currentUserLogin} numberInCart={numberInCart}/>
    );
}

export default HeaderContainer;
