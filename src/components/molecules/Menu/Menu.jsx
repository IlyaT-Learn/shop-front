import React from 'react';
import styles from './Menu.module.scss'
import Category from '../../atoms/MCategory/Category';

const Menu = () => (
    <div className={styles.menuContainer}>
        <div className={styles.mainUnit}>
            <p>All Categories</p>
            <p className={styles.line}/>
        </div>
        <div className={styles.unitWithCategories}>
            <Category>Clothes & Footwear</Category>
            <Category>Kitchen Appiance</Category>
            <Category>New Arrivals</Category>
            <Category>Laptop & Computer</Category>
            <Category>Mobile & Cover</Category>
            <Category>Accessories</Category>
            <Category>Interior Design</Category>
            <Category>Game & Sports</Category>
            <Category>Furniture & Lighting</Category>
            <Category>More Categories</Category>
        </div>
    </div>
);

export default Menu;
