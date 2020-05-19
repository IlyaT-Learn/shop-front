import React from "react";
import styles from './Menu.module.scss'
import Category from './Category'

const Menu = () => {

    return (
        <div className={styles.menuContainer}>
            <div className={styles.mainUnit}>
                <p>All Categories</p>
                <p className={styles.line}/>
            </div>
            <div className={styles.unitWithCategories}>
                <Category nameOfCategory={'Clothes & Footwear'}/>
                <Category nameOfCategory={'Kitchen Appiance'}/>
                <Category nameOfCategory={'New Arrivals'}/>
                <Category nameOfCategory={'Laptop & Computer'}/>
                <Category nameOfCategory={'Mobile & Cover'}/>
                <Category nameOfCategory={'Accessories'}/>
                <Category nameOfCategory={'Interior Design'}/>
                <Category nameOfCategory={'Game & Sports'}/>
                <Category nameOfCategory={'Furniture & Lighting'}/>
                <Category nameOfCategory={'More Categories'}/>
            </div>
        </div>
    );
};

export default Menu;