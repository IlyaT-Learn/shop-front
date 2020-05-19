import React, { useCallback } from 'react';
import ContactUs from '../page/ContactUsPage/ContactUsPage';
import { useDispatch, useSelector } from 'react-redux';
import { CONTACT_REQUEST } from '../action/contactUs.action'

const ContactUsContainer = () => {
    const dispatch = useDispatch();
    const contactUsState = useSelector(({ contactUs }) => contactUs);
    const submitRequestStatus = contactUsState.contactRequest.status;

    const handleContactSubmitRequest = useCallback((data) => {
        dispatch(CONTACT_REQUEST(data));
    }, [dispatch]);

    return (
        <ContactUs
            onSubmitRequest={handleContactSubmitRequest}
            submitRequestStatus={submitRequestStatus} />
    );
}

export default ContactUsContainer;
