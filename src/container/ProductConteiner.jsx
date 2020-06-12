import React from 'react';
import useReactRouter from 'use-react-router';
import ProductPage from '../page/ProductPage/ProductPage';
import {useDispatch, useSelector} from 'react-redux';

const ProductContainer = () => {
    const {match: {params: {id}}} = useReactRouter();
    const productsDescriptionMap = useSelector(({productsDescription: {storage}}) => storage);

    return (
        <ProductPage
            productDescription={productsDescriptionMap.get(+id)}/>
    );
};

export default ProductContainer;
