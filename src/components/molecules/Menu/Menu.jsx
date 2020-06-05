import React from 'react';
import styles from './Menu.module.scss'
import {SUCCESS} from '../../../constants/request.constants';
import Category from '../../atoms/MCategory/Category';
import arrow_down from '../../../image/Arrow_Down_22313.ico';

const Menu = ({menuRequest}) => (
    <div className={styles.menuContainer}>
        <div className={styles.mainUnit}>
            <p>Все категории</p>
            <img src={arrow_down} alt='arrow_down'/>
        </div>
        <div className={styles.unitWithCategories}>
            {menuRequest.status === SUCCESS ?
                (menuRequest.categories.allCategories.map((item, iter) => (<Category data={item} key={iter}/>)))
                :
                null
            }
        </div>
    </div>
);

export default Menu;
