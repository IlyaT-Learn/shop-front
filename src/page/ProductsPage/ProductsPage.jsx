import React from 'react';
import styles from './ProductsPage.module.scss';
import {SUCCESS} from '../../constants/request.constants';
import Product from '../../components/molecules/Product/Product';

const ProductsPage = ({productsRequest}) => {

    return (
        <div className={styles.container}>
            {productsRequest.status === SUCCESS
                ?
                productsRequest.products.rows.map((item, iter) => (<Product productDescription={item} key={iter}/>))
                :
                null}
        </div>
    );
};

export default ProductsPage;
