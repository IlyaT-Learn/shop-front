import React from 'react';

const InputWithField = ({inputValue, fieldName, onChange, isPassword = false}) => {

    return (
        <>
            <div>
                {fieldName}
                <input type={isPassword ? "password" : "text"}
                       value={inputValue} onChange={onChange}
                       placeholder={fieldName}/>
            </div>
        </>
    );
}

export default InputWithField;
