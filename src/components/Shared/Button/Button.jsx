import React from 'react';
import propTypes from 'prop-types';


const Button = (props) => {
  const { label, className } = props;
  const combinedClassName = `${className} btn-flat waves-effect waves-light`;

  return (
    <button
      {...props}
      type="button"
      className={combinedClassName}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  className: propTypes.string,
};

export default Button;
