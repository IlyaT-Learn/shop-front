import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MENU_REQUEST} from '../action/menu.action'
import Menu from "../components/molecules/Menu/Menu";
import {SUCCESS} from '../constants/request.constants';

const MenuContainer = () => {
    const dispatch = useDispatch();
    const menuState = useSelector(({menu}) => menu);
    const menuSubmitRequest = menuState.menuRequest;

    const handleFetchRequest = useCallback((data) => {
        dispatch(MENU_REQUEST(data));
    }, [dispatch]);

    return (
        <Menu getListOfCategories={handleFetchRequest}
              menuSubmitRequest={menuSubmitRequest}/>
    );
}

export default MenuContainer;
