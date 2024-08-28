// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, disabled, style }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      style={style}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  style: {},
};

export default Button;

