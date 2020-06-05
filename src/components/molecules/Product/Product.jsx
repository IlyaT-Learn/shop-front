import React from 'react';
import styles from './Product.module.scss'
import Stars from '../../atoms/Stars/Stars';
import fullScreen from '../../../image/fullScrean.png';
import cart from '../../../image/cartIcon.png'

const Product = ({productDescription}) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageImitate}/>
            <Stars rating={productDescription.rating}/>
            <span>{productDescription.name}</span>
            <p>{`${productDescription.price} бел.р.`}</p>
            <img src={fullScreen} className={styles.fullScreenIconContainer} alt='stars'/>
            <img src={cart} className={styles.cartIconContainer} alt='stars'/>
        </div>
    );
};

export default Product;
