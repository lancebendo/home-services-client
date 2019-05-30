import React from 'react';
import propTypes from 'prop-types';

const Input = (props) => {
  const { field, label } = props;
  return (
    <div className="input-field">
      <input
        {...props}
        id={field}
        name={field}
      />
      <label htmlFor={field}>{label}</label>
    </div>
  );
};

Input.propTypes = {
  field: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Input;
