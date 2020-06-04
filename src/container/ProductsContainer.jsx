import React, {useEffect} from 'react';
import ProductsPage from '../page/ProductsPage/ProductsPage';
import {PRODUCTS_REQUEST} from '../action/products.action';
import {useDispatch, useSelector} from 'react-redux';
import useReactRouter from 'use-react-router';

const ProductsContainer = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(({products}) => products);
    const productsRequest = productsState.productsRequest;
    const {match: {params: {id}}} = useReactRouter();

    useEffect(() => {
        dispatch(PRODUCTS_REQUEST(id));
    }, [dispatch, id]);

    return (
        <ProductsPage productsRequest={productsRequest}/>
    );
};

export default ProductsContainer;
