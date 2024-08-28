import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

const InputText = ({ value, disabled, focus, error, errorFocus, style, placeholder, id }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (focus && inputRef.current) {
          inputRef.current.focus();
        } else if (!focus && inputRef.current) {
          inputRef.current.blur(); 
        }
      }, [focus]);

      const computedStyle = {
        ...style,
        ...(focus && !errorFocus ? {
          border: '1px solid #007BFF',
          boxShadow: '0 0 8px 3px rgba(0, 123, 255, 0.7)',
        } : {}),
        ...(errorFocus ? {
          border: '1px solid red',
          boxShadow: '0 0 8px 3px rgba(255, 0, 0, 0.7)',
        } : {}),
        ...(error ? {
            border: '1.5px solid red',
        }:{})
      };

    return (
      <input 
      id={id}
      type="text"
      value={value} 
      disabled={disabled} 
      style={computedStyle}
      placeholder={placeholder} 
      ref={inputRef} >
      </input>
    );
  };

  InputText.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    focus: PropTypes.bool,
    error: PropTypes.bool,
    errorFocus: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  InputText.defaultProps = {
    value: '',
    disabled: false,
    style: {},
    focus: false,
    error: false,
    errorFocus: false,
    placeholder: 'Input...',
    id: '',
  };

  export default InputText;