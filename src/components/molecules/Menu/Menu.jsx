import React, {useEffect} from 'react';
import styles from './Menu.module.scss'
import {SUCCESS} from "../../../constants/request.constants";
import Category from '../../atoms/MCategory/Category';

const Menu = ({getListOfCategories, menuSubmitRequest}) => {

    useEffect(() => {
        getListOfCategories();
    }, [getListOfCategories])

    return (
        <div className={styles.menuContainer}>
            <div className={styles.mainUnit}>
                <p>All Categories</p>
                <p className={styles.line}/>
            </div>
            <div className={styles.unitWithCategories}>
               {menuSubmitRequest.status === SUCCESS ? menuSubmitRequest.result.payload.allCategories .map(item => {
                        return (<Category>{item.name}</Category>)
                    })  : null
                }
            </div>
        </div>
    );
};

export default Menu;
