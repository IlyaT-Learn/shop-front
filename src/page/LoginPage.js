import React, {useCallback, useState} from 'react';
import InputWithLabel from '../components/atoms/Input';
import {useHistory} from 'react-router-dom';
import TextOnPage from '../constants/localizationLoginPage';

const LoginPage = ({onSubmitRequest}) => {
    const infoSource = TextOnPage.LoginPage;
    const history = useHistory();
    const [email, setEmail] = useState('');
    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail]);

    const [password, setPassword] = useState('');
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword]);

    const handleLoginClick = useCallback(() => {
        let loginObject = {
            email: email,
            password: password
        }

        onSubmitRequest(loginObject)
    }, [onSubmitRequest, email, password]);

    const handleContinueClick = useCallback(() => {
        history.push('/registration');
    }, [history.push]);

    return (
        <>
            <div>
                <div>
                    <label>{infoSource.FirstBlock.header}</label>
                    <label>{infoSource.FirstBlock.explanation}</label>
                    <label>{infoSource.FirstBlock.description}</label>
                    <button onClick={handleContinueClick}>{infoSource.FirstBlock.buttonText}</button>
                </div>
                <div>
                    <label>{infoSource.SecondBlock.header}</label>
                    <label>{infoSource.SecondBlock.explanation}</label>
                    <InputWithLabel inputValue={email}
                                    fieldName={infoSource.SecondBlock.components.first}
                                    onChange={handleEmailChange}/>
                    <InputWithLabel inputValue={password}
                                    fieldName={infoSource.SecondBlock.components.second}
                                    onChange={handlePasswordChange}
                                    isPassword='true'/>
                    <button onClick={handleLoginClick}>{infoSource.SecondBlock.buttonText}</button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
