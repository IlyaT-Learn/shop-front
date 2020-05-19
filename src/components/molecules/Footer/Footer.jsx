import React from "react";
import styles from './Footer.module.scss';
import cn from 'classnames';
import NavButton from "./NavButton";
import SendUnit from "./SendUnit";

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainUnits}>
                <h3>Information</h3>
                <NavButton nameOfTheButton={'About Us'}/>
                <NavButton nameOfTheButton={'Delivery Information'}/>
                <NavButton nameOfTheButton={'Privacy Policy'}/>
            </div>
            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>My Account</h3>
                <NavButton nameOfTheButton={'My account'}/>
                <NavButton nameOfTheButton={'Order history'}/>
                <NavButton nameOfTheButton={'Newsletter'}/>
                <NavButton nameOfTheButton={'Returns'}/>
            </div>
            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>Contact Information</h3>
                <NavButton nameOfTheButton={'Martech - Food Store United States'}/>
                <NavButton nameOfTheButton={'000-000-0000'}/>
                <NavButton nameOfTheButton={'123456'}/>
                <NavButton nameOfTheButton={'sales@yourcompany.com'}/>
            </div>
            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>Join Our Mailing List</h3>
                <p className={styles.textFiller}>There are many variations of <br/>
                passages of Lorem ispum available</p>
                <SendUnit/>
            </div>
        </div>
    );
};

export default Footer;