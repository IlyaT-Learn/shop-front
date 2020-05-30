import React from 'react';
import styles from './Footer.module.scss';
import FNavLink from '../../atoms/FNavLink/FNavLink';
import H3FLink from '../../atoms/H3FLink/H3FLink';
import SendButton from '../../atoms/SendButton/SendButton';
import FTextFiller from '../../atoms/FTextFiller/FTextFiller';

const Footer = () => (
    <div className={styles.footerContainer}>
        <div className={styles.groupContainer}>
            <H3FLink>Информация</H3FLink>
            <FNavLink>Обратная связь</FNavLink>
            <FNavLink>Информация о доставке</FNavLink>
            <FNavLink>Политика конфеденциальности</FNavLink>
        </div>
        <div className={styles.groupContainer}>
            <H3FLink>Мой аккаунт</H3FLink>
            <FNavLink>Аккаунт</FNavLink>
            <FNavLink>История покупок</FNavLink>
            <FNavLink>Новостна рассылка</FNavLink>
        </div>
        <div className={styles.groupContainer}>
            <H3FLink>Контакты</H3FLink>
            <FNavLink>Респулика буларусь - Новополоцк</FNavLink>
            <FNavLink>+375 29 295-46-57</FNavLink>
            <FNavLink>email@yourmarcket.com</FNavLink>
        </div>
        <div className={styles.groupContainer}>
            <H3FLink>Присоединиться к нашей рассылке</H3FLink>
            <FTextFiller>Ваш адрес электоронной почты не будет использоваться не на каких сторонних
                ресурсах</FTextFiller>
            <div className={styles.sendUnit}>
                <input className={styles.textField} placeholder="Введите свой адрес"/>
                <SendButton/>
            </div>
        </div>
    </div>
);

export default Footer;
