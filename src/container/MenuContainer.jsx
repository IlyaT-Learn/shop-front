import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MENU_REQUEST} from '../action/menu.action'
import Menu from '../components/molecules/Menu/Menu';

const MenuContainer = () => {
    const dispatch = useDispatch();
    const menuState = useSelector(({menu}) => menu);
    const menuRequest = menuState.menuRequest;

    useEffect((data) => {
        dispatch(MENU_REQUEST(data));
    }, [dispatch]);

    return (
        <Menu menuRequest={menuRequest}/>
    );
}

export default MenuContainer;
