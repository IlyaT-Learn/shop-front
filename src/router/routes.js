import React from 'react';
import ExampleContainer from '../container/ExmpleContainer';
import LoginContainer from '../container/LoginContainer';
import RegisterContainer from '../container/RegisterContainer';
import ContactUsContainer from '../container/ContactUsContainer';
import ProductsContainer from '../container/ProductsContainer';
import CartContainer from '../container/CartContainer'
import ProductContainer from '../container/ProductConteiner';
import CheckoutPage from '../page/CheckoutPage/CheckoutPage';

const routes = [
    {
        exact: true, //обязательное полное совпадение
        path: '/',
        component: () => (<>Main</>)  // тут должен быть компонент(контейнер) импортированный
    },
    {
        // path: '/result/:examRoute',   //вот так можно указать параметры
        //import useReactRouter from 'use-react-router';  - c помощью него можно их достать
        //const { history, location } = useReactRouter();
        path: '/example',
        component: ExampleContainer
    },
    {
        path: '/register',
        component: RegisterContainer
    },
    {
        path: '/login',
        component: LoginContainer
    },
    {
        path: '/contact_us',
        component: ContactUsContainer
    }, {
        path: '/products/:id',
        component: ProductsContainer
    }, {
        path: '/cart',
        component: CartContainer
    }, {
        path: '/product/:id',
        component: ProductContainer
    }, {
        path: '/checkout',
        component: CheckoutPage
    }
];

export default routes;
