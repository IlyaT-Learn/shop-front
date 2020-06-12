import React from 'react';
import styles from './CheckoutPage.module.scss'
import {useSelector} from 'react-redux';

const CheckoutPage = () => {
    const productsDescriptionMap = useSelector(({productsDescription: {storage}}) => storage.get(30));

debugger
    return (
        <div>
            CheckOutPage
            <img
                src={`data:image/jpg;base64,${productsDescriptionMap.picture}`}
                alt=''/>
        </div>
    );
};

export default CheckoutPage;
