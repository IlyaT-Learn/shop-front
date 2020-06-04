import React, {useEffect} from 'react';
import FoodFieldPage from '../page/FoodFieldPage/FoodFieldPage';
import {FOOD_FIELD_REQUEST} from '../action/foodField.action';
import {useDispatch, useSelector} from 'react-redux';
import useReactRouter from 'use-react-router';

const FoodFieldContainer = () => {
    const dispatch = useDispatch();
    const foodFieldState = useSelector(({products}) => products);
    const foodFieldRequest = foodFieldState.foodFieldRequest;
    const {match: {params: {id}}} = useReactRouter();

    useEffect(() => {
        dispatch(FOOD_FIELD_REQUEST(id));
    }, [dispatch, id]);

    return (
        <FoodFieldPage foodFieldRequest={foodFieldRequest}/>
    );
};

export default FoodFieldContainer;
