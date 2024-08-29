import React from 'react';
import InputText from './InputText';
import InputLabel from './InputLabel';
import InputAnnotation from './InputAnnotation';

const InputGroup = ({ styleGroup, labelValue, inputId, inputValue, annotationValue, error, disabled, focus, errorFocus, ...rest }) => {
  const labelStyle = disabled ? { color: 'grey' } : { color: 'black' };
  const annotationStyle = disabled ? { color: 'grey', opacity: 0.7 } : { color: error || errorFocus ? 'red' : 'black' };

  return (
    <div style={{ ...styleGroup, display: 'flex', flexDirection: 'column' }}> 
      <InputLabel htmlFor={inputId} value={labelValue} style={labelStyle} />
      <InputText id={inputId} value={inputValue} disabled={disabled} error={error} focus={focus} errorFocus={errorFocus}{...rest} />
      <InputAnnotation htmlFor={inputId} value={annotationValue} style={annotationStyle} disabled={disabled} error={error} />
    </div>
  );
};
  export default InputGroup;