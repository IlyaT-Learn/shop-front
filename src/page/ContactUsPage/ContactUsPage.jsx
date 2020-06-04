import React, {useCallback, useState} from 'react';
import {TextField, TextareaAutosize, Button} from '@material-ui/core';
import styles from '../ContactUsPage/ContactUsPage.module.scss';
import {FAILURE, REQUEST} from '../../constants/request.constants';
import Loader from '../../components/atoms/Loader/Loader';
import house from '../../image/house_home.ico';
import phone from '../../image/phone.ico';

const ContactUs = ({onSubmitRequest, submitRequestStatus}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');

    const handleNameChange = useCallback((e) => setName(e.target.value), [setName]);
    const handleEmailChange = useCallback((e) => setEmail(e.target.value), [setEmail]);
    const handleEnquiryChange = useCallback((e) => setEnquiry(e.target.value), [setEnquiry]);

    const handleSubmitClick = useCallback(() => {
        const submitObject = {
            name,
            email,
            enquiry,
        };

        onSubmitRequest(submitObject);
    }, [onSubmitRequest, name, email, enquiry]);

    return (<div className={styles.container}>
        <h1>Обратная связь</h1>
        <div className={styles.containerInfo}>
            <div className={styles.infoBlock}>
                <h3>Наши координаты</h3>
                <img src={house} alt="home_icon"/>
                <h5>iMartech - торговля продуктами</h5>
                <h5>Республика Беларусь, г.Новополоцк, ул.Молодежная д.44</h5>
            </div>
            <div className={styles.infoBlock}>
                <img src={phone} alt="phone_icon"/>
                <h5>Телефон для связи</h5>
                <h5>+375 29 295-46-57</h5>
            </div>
        </div>
        <h3>Форма обращения</h3>
        <div className={styles.margin_field}>
            <TextField
                label='Ваше имя'
                variant='outlined'
                value={name}
                onChange={handleNameChange}/>
        </div>
        <div className={styles.margin_field}>
            <TextField
                label='Адрес почты для ответа'
                variant='outlined'
                value={email}
                onChange={handleEmailChange}/>
        </div>
        <TextareaAutosize
            rowsMin={3}
            value={enquiry}
            onChange={handleEnquiryChange}
            placeholder="Текст обращения"/>
        <div className={styles.submitButtonContainer}>
            <Button
                variant='contained'
                color="secondary"
                onClick={handleSubmitClick}
                disabled={submitRequestStatus === REQUEST}>Отправить</Button>
            <Loader
                show={submitRequestStatus === REQUEST}
                className={styles.loader}/>
        </div>

        {submitRequestStatus === FAILURE ? <div className={styles.error}>Submit Error!</div> : null}
    </div>);
}

export default ContactUs;
