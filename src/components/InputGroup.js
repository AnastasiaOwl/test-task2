import React from 'react';
import InputText from './InputText';
import InputLabel from './InputLabel';

const InputGroup = ({ styleGroup, labelValue, inputId, inputValue, disabled, focus, errorFocus, ...rest }) => {
  const labelStyle = disabled ? { color: 'grey' } : { color: 'black' };

  return (
    <div style={{ ...styleGroup, display: 'flex', flexDirection: 'column' }}> 
      <InputLabel htmlFor={inputId} value={labelValue} style={labelStyle} />
      <InputText id={inputId} value={inputValue} disabled={disabled} focus={focus} errorFocus={errorFocus}{...rest} />
    </div>
  );
};
  export default InputGroup;