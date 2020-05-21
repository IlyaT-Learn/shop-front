import React, { useCallback, useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import styles from '../ContactUsPage/ContactUsPage.module.scss';
import { FAILURE, REQUEST } from '../../constants/request.constants';
import Loader from '../../components/atoms/Loader/Loader'

const ContactUs = ({ onSubmitRequest, submitRequestStatus }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, [setName]);

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [setEmail]);

    const handleEnquiryChange = useCallback((e) => {
        setEnquiry(e.target.value);
    }, [setEnquiry]);

    const handleSubmitClick = useCallback(() => {
        const submitObject = {
            name,
            email,
            enquiry,
        };

        onSubmitRequest(submitObject);
    }, [onSubmitRequest, name, email, enquiry]);

    return (<div className={styles.container}>
        <label>Contact Us</label>
        <div>
            <div>
                <img src="" alt="" />
                <label>Food Store</label>
                <label>Address</label>
            </div>
            <div>
                <img src="" alt="" />
                <label>Telephone</label>
                <label>123456789</label>
            </div>
        </div>
        <label>Contact Form</label>
        <TextField
            label='Your Name'
            variant='outlined'
            value={name}
            onChange={handleNameChange} />
        <TextField
            label='E-Mail Address'
            variant='outlined'
            value={email}
            onChange={handleEmailChange} />
        <TextareaAutosize
            value={enquiry}
            onChange={handleEnquiryChange}
            placeholder="Enquiry" />
        <div className={styles.submitButttonContainer}>
            <Button
                variant='contained'
                onClick={handleSubmitClick}
                disabled={submitRequestStatus === REQUEST}>SUBMIT</Button>
            <Loader
                show={submitRequestStatus === REQUEST}
                className={styles.loader} />
        </div>

        {submitRequestStatus === FAILURE ? <div className={styles.error}>Submit Error!</div> : null}
    </div>);
}

export default ContactUs;
