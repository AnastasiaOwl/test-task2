import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({ htmlFor, value, style }) => {
    return (
        <label htmlFor={htmlFor} style={style}>
        {value}
      </label>
    );
  };

  InputLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  InputLabel.defaultProps = {
    value: 'Label',
    style: {},
  };

  export default InputLabel;