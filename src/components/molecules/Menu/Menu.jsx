import React from "react";
import styles from './Menu.module.scss'

const Menu = () => {

    return (
        <div className={styles.menuContainer}>
            <div className={styles.mainUnit}>
                <p>All Categories</p>
                <p className={styles.line}/>
            </div>
            <div className={styles.unitWithCategories}>
                <div>
                    <img src="#"/>
                    <a>Clothes & Footwear</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Kitchen Appiance</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>New Arrivals</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Laptop & Computer</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Mobile & Cover</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Accessories</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Interior Design</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Game & Sports</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>Furniture & Lighting</a>
                </div>
                <div>
                    <img src="#"/>
                    <a>More Categories</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;