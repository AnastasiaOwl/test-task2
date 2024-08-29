import React, { useEffect, useState } from 'react';
import InputText from './InputText';
import InputLabel from './InputLabel';
import InputAnnotation from './InputAnnotation';

const InputGroup = ({ styleGroup, labelValue, inputId, inputValue, annotationValue, error, disabled, focus, errorFocus, theme, ...rest }) => {
  const isDarkMode = theme === 'dark';

  const labelStyle = {
    color: disabled ? 'grey' : isDarkMode ? 'white' : 'black'
  };

  const annotationStyle = {
    color: disabled ? 'grey' : error || errorFocus ? 'red' : isDarkMode ? 'white' : 'black',
    opacity: disabled ? 0.7 : 1
  };

  const inputStyle = {
    backgroundColor: isDarkMode ? '#333' : 'white',
    color: isDarkMode ? 'white' : 'dark-grey',
    borderRadius: '5px',
    height: '25px',
     width:'200px',
  };

  return (
    <div style={{ ...styleGroup, display: 'flex', flexDirection: 'column', backgroundColor: isDarkMode ? '#2E3438' : '#FFFFFF', height: '100hv', padding: '5px' }}> 
      <InputLabel htmlFor={inputId} value={labelValue} style={labelStyle} />
      <InputText id={inputId} value={inputValue} disabled={disabled} style={inputStyle} error={error} focus={focus} errorFocus={errorFocus} {...rest} />
      <InputAnnotation htmlFor={inputId} value={annotationValue} style={annotationStyle} disabled={disabled} error={error} />
    </div>
  );
  
};
  export default InputGroup;