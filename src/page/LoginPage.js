import React, {useCallback, useState} from "react";
import InputWithLabel from "../components/atoms/InputWithLabel";
import {useHistory} from "react-router-dom";
import TextInformation from "../constants/localization";

const LoginPage = ({onSubmitRequest}) => {

    const infoSource = TextInformation().LoginPage;
    const history = useHistory();
    const [email, setEmail] = useState('');
    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    });

    const [password, setPassword] = useState('');
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value)
    });

    const handleLoginClick = useCallback(() => {
        onSubmitRequest(GetFieldsValues())
    }, [onSubmitRequest, GetFieldsValues()]);

    const handleContinueClick = useCallback(() => {
        history.push('/registration');
    });

    function GetFieldsValues() {
        return {
            email: email,
            password: password
        };
    }

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