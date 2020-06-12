import React from 'react';
import styles from './ProductsPage.module.scss';
import Product from '../../components/molecules/Product/Product';

const ProductsPage = ({products, onPutProductInCart, onProductPage}) => {

    return (
        <div className={styles.container}>
            {products ? products.rows.map((item, iter) => (<Product productDescription={item}
                                                                    key={iter}
                                                                    onPutProductInCart={onPutProductInCart}
                                                                    onProductPage={onProductPage}/>)) : null}

        </div>
    );
};

export default ProductsPage;
