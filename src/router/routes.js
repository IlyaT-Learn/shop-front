import React from 'react';
import ExampleContainer from '../container/ExmpleContainer';
import LoginContainer from '../container/LoginContainer';
import RegisterContainer from '../container/RegisterContainer';
import ContactUsContainer from '../container/ContactUsContainer';
import FoodField from '../container/FoodFieldContainer';
import Product from '../container/PageWithProductContainer';

const routes = [
    {
        exact: true, //обязательное полное совпадение
        path: '/',
        component: () => (<>Main</>)  // тут должен быть компонент(контейнер) импортированNный
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
        path: '/foodField/:id',
        component: FoodField
    }, {
        path: '/product',
        component: Product
    }
];

export default routes;
