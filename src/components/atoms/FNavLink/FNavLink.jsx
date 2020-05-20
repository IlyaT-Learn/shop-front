import React from 'react';
import styles from './FNavLink.module.scss';
import cn from 'classnames';

const FNavLink = ({children,className}) =>{
    const highLightNavButton = (event) => {
        event.target.parentNode.firstChild.className = `${styles.lightArrow}`;
        event.target.parentNode.lastChild.className =`${styles.lightNameOfNavButton}`;
    }

    const lowLightNavButton = (event) => {
        event.target.parentNode.lastChild.className =`${styles.nameOfNavButton}`;
        event.target.parentNode.firstChild.className = `${styles.arrow}`
    }

    return (
        <div className={cn(styles.navButton , className)}>
            <i onMouseOut={(event) => lowLightNavButton(event)}
               onMouseOver={(event) => highLightNavButton(event)}
               className={styles.arrow}/>
            <p className={styles.nameOfNavButton} onMouseOut={(event) => lowLightNavButton(event)}
               onMouseOver={(event) => highLightNavButton(event)}>{children}</p>
        </div>
    )
}

export default FNavLink;
