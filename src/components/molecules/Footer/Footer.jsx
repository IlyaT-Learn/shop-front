import React from "react";
import styles from './Footer.module.scss';
import cn from 'classnames';

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainUnits}>
                <h3>Information</h3>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>About Us</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Delivery Information</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>My Account</h3>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>My account</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Order history</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Newsletter</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Returns</p>
                </div>
            </div>
            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>Contact Information</h3>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>Martech - Food Store United States</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>000-000-0000</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>123456</p>
                </div>
                <div className={styles.navButton}>
                    <i className={styles.arrow}/>
                    <p>sales@yourcompany.com</p>
                </div>
            </div>

            <div className={cn(styles.verticalLine, styles.mainUnits)}>
                <h3>Join Our Mailing List</h3>
                <p className={styles.textFiller}>There are many variations of <br/> passages of Lorem ispum available</p>
                <div className={styles.sendUnit}>
                    <input placeholder="Enter Your Email Address"/>
                    <p className={styles.sendButton}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;