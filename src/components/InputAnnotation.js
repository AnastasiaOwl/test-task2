import React from 'react';
import PropTypes from 'prop-types';

const InputAnnotation = ({ htmlFor, value, disabled, error, style, id }) => {

    const computedStyle = {
        ...style,
        ...(error ? { color: 'red' } : {}),
        ...(disabled ? { color: 'grey', opacity: 0.7 } : {}),
      };

    return (
        <label htmlFor={htmlFor} style={computedStyle}>
        {value}
      </label>
    );
  };

  InputAnnotation.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    value: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  InputAnnotation.defaultProps = {
    value: 'This is a hint text to help user.',
    disabled: false,
    error: false,
    style: {},
  };

  export default InputAnnotation;