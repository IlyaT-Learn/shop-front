import React from "react";

const InputWithField = ({inputValue, fieldName, onChange, isPassword = false}) => {

    function getTypeForField() {
        if(isPassword){
            return "password";
        }

        return "text";
    }

    return (
      <>
          <div>
              {fieldName}
              <input type={getTypeForField()} value={inputValue} onChange={onChange} placeholder={fieldName}/>
          </div>
      </>
    );
}

export default InputWithField;