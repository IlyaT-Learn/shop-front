import React from "react";
import styles from './Header.module.scss';

const NavButton = (props) => {

    return (
        <div>
            <span />
            <a>{props.nameOfTheButton}</a>
            <span/>
        </div>
    )
}

export default NavButton;
