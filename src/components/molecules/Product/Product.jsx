import React, {useCallback} from 'react';
import styles from './Product.module.scss'
import Stars from '../../atoms/Stars/Stars';
import fullScreen from '../../../image/fullScrean.png';
import cart from '../../../image/cartIcon.png'

const Product = ({productDescription, onPutProductInCart, onProductPage}) => {

    return (
        <div className={styles.container}>
            <img src={productDescription.picture}
                 className={styles.image}
                 alt='products_picture'/>
            <Stars rating={productDescription.rating}/>
            <span>{productDescription.name}</span>
            <p>{`${productDescription.price} Br`}</p>
            <img src={fullScreen}
                 className={styles.fullScreenIconContainer}
                 onClick={() => onProductPage(productDescription.id)}
                 alt='stars'/>
            <img src={cart}
                 className={styles.cartIconContainer}
                 onClick={() => onPutProductInCart(productDescription.id)}
                 alt='stars'/>
        </div>
    );
};

export default Product;
