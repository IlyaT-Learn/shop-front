import styles from "./Footer.module.scss";
import React from "react";
import SendButton from "./SendButton";
const SendUnit = () => {
    return (
        <div className={styles.sendUnit}>
            <input placeholder="Enter Your Email Address"/>
            <SendButton/>
        </div>
    );
};

export default SendUnit;