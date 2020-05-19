import React from 'react';
import styles from "./Footer.module.scss";

const NavButton = (props) => {
    const highLightNavButton = (event) => {
        event.target.parentNode.firstChild.className = `${styles.lightArrow}`;
        event.target.parentNode.lastChild.className =`${styles.lightNameOfNavButton}`;
    }

    const lowLightNavButton = (event) => {
        event.target.parentNode.lastChild.className =`${styles.nameOfNavButton}`;
        event.target.parentNode.firstChild.className = `${styles.arrow}`
    }

    return (
        <div className={styles.navButton}>
            <i onMouseOut={(event) => lowLightNavButton(event)}
               onMouseOver={(event) => highLightNavButton(event)}
               className={styles.arrow}/>
            <p className={styles.nameOfNavButton} onMouseOut={(event) => lowLightNavButton(event)}
               onMouseOver={(event) => highLightNavButton(event)}> {props.nameOfTheButton}</p>
        </div>
    )
}

export default NavButton;