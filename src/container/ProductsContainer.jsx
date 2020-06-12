import React, {useCallback, useEffect} from 'react';
import ProductsPage from '../page/ProductsPage/ProductsPage';
import useReactRouter from 'use-react-router';
import {useHistory} from 'react-router';
import {PRODUCTS_REQUEST} from '../action/products.action';
import {useDispatch, useSelector} from 'react-redux';
import {PUT_PRODUCT_IN_CART} from '../action/putProductInCart.action';
import {SUCCESS} from '../constants/request.constants';

const ProductsContainer = () => {
        const dispatch = useDispatch();
        const history = useHistory();
        const {productsRequest} = useSelector(({products}) => products);
        const {submitRequest} = useSelector(({login}) => login);
        const userId = submitRequest.status === SUCCESS ? submitRequest.currentUser.id : null;
        const {match: {params: {id}}} = useReactRouter();

        const handleGoToProductPage = useCallback((id) => {
            history.push(`/product/${id}`);
        }, [history, dispatch, id]);

        const handlePutProductInCart = useCallback((productId) => {
            dispatch(PUT_PRODUCT_IN_CART({productId, userId}))
        }, [dispatch, userId]);

        useEffect(() => {
            dispatch(PRODUCTS_REQUEST(id));
        }, [dispatch, id]);

        return (
            <ProductsPage products={productsRequest.status === SUCCESS ? productsRequest.products : null}
                          onPutProductInCart={handlePutProductInCart}
                          onProductPage={handleGoToProductPage}
            />
        );
    }
;

export default ProductsContainer;
