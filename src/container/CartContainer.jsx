import React, {useCallback, useEffect, useState} from 'react';
import CartPage from '../page/CartPage/CartPage';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_PRODUCT_FROM_CART} from '../action/removeProductFromCart.action';
import {useHistory} from 'react-router';

const CartContainer = () => {
    const dispatch = useDispatch();
    const productsInCartList = useSelector(({cart: {productsInCart}}) => productsInCart);
    const loginStatus = useSelector(({login: {submitRequest: {status}}}) => status);
    const productsDescriptionMap = useSelector(({productsDescription: {storage}}) => storage);

    const key = useState(productsInCartList.length);

    const handleRemoveProductInCart = useCallback((id) => {
        dispatch(REMOVE_PRODUCT_FROM_CART({id, loginStatus}));
    }, [dispatch, loginStatus]);

    return (
        <CartPage
            productsDescriptionMap={productsDescriptionMap}
            productsList={productsInCartList}
            onRemoveProductInCart={handleRemoveProductInCart}
            key={key}
        />
    );
};

export default CartContainer;
