import React, {useCallback} from 'react';
import styles from './Footer.module.scss';
import FNavLink from '../../atoms/FNavLink/FNavLink';
import H3FLink from '../../atoms/H3FLink/H3FLink';
import SendButton from '../../atoms/SendButton/SendButton';
import FTextFiller from '../../atoms/FTextFiller/FTextFiller';
import {useHistory} from 'react-router';

const Footer = () => {
    const history = useHistory();

    const handleContactUsClick = useCallback(() => {
        history.push('/contact_us');
    }, [history]);

    return (
        <div className={styles.footerContainer}>
            <div className={styles.groupContainer}>
                <H3FLink>Информация</H3FLink>
                <FNavLink onClick={handleContactUsClick}>Обратная связь</FNavLink>
                <FNavLink>Информация о доставке</FNavLink>
                <FNavLink>Политика конфиденциальности</FNavLink>
            </div>
            <div className={styles.groupContainer}>
                <H3FLink>Мой аккаунт</H3FLink>
                <FNavLink>Аккаунт</FNavLink>
                <FNavLink>История покупок</FNavLink>
                <FNavLink>Новостная рассылка</FNavLink>
            </div>
            <div className={styles.groupContainer}>
                <H3FLink>Контакты</H3FLink>
                <FNavLink>Респулика Беларусь - Новополоцк</FNavLink>
                <FNavLink>+375 29 295-46-57</FNavLink>
                <FNavLink>email@yourmarcket.com</FNavLink>
            </div>
            <div className={styles.groupContainer}>
                <H3FLink>Присоединиться к нашей рассылке</H3FLink>
                <FTextFiller>Ваш адрес электоронной почты не будет использоваться ни на каких сторонних
                    ресурсах</FTextFiller>
                <div className={styles.sendUnit}>
                    <input className={styles.textField} placeholder="Введите свой адрес"/>
                    <SendButton/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
