import React from 'react';
import styles from './Footer.module.scss';
import FNavLink from '../../atoms/FNavLink/FNavLink';
import H3FLink from '../../atoms/H3FLink/H3FLink';
import FMainUnit from '../../atoms/FMainUnits/FMainUnit';
import SendButton from '../../atoms/SendButton/SendButton';
import FTextFiller from "../../atoms/FTextFiller/FTextFiller";

const Footer = () => (
    <div className={styles.footerContainer}>
        <FMainUnit>
            <H3FLink>Information</H3FLink>
            <FNavLink> About Us</FNavLink>
            <FNavLink> Delivery Information</FNavLink>
            <FNavLink> Privacy Policy</FNavLink>
        </FMainUnit>
        <FMainUnit className={styles.verticalLine}>
            <H3FLink>My Account</H3FLink>
            <FNavLink>My account</FNavLink>
            <FNavLink>Order history</FNavLink>
            <FNavLink>Newsletter</FNavLink>
            <FNavLink>Returns</FNavLink>
        </FMainUnit>
        <FMainUnit className={styles.verticalLine}>
            <H3FLink>Contact Information</H3FLink>
            <FNavLink>Martech - Food Store United States</FNavLink>
            <FNavLink>000-000-0000</FNavLink>
            <FNavLink>123456</FNavLink>
            <FNavLink>sales@yourcompany.com</FNavLink>
        </FMainUnit>
        <FMainUnit className={styles.verticalLine}>
            <H3FLink>Join Our Mailing List</H3FLink>
            <FTextFiller>There are many variations of <br/>
                passages of Lorem ispum available</FTextFiller>
            <div className={styles.sendUnit}>
                <input className={styles.textField} placeholder="Enter Your Email Address"/>
                <SendButton/>
            </div>
        </FMainUnit>
    </div>
);

export default Footer;
