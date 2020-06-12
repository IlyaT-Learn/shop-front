import React from 'react';
import styles from './SmallCart.module.scss';
import smallCart from '../../../image/smallCart.png';

const SmallCart = ({onClick, productsInCartCount}) => {

    return (
        <div className={styles.container} onClick={onClick}>
            <img src={smallCart} alt='small cart icon'/>
            <div className={styles.numberInCart}>{productsInCartCount}</div>
        </div>
    );
};

export default SmallCart;
