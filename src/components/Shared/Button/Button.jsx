import React from 'react';
import propTypes from 'prop-types';

import Icon from '../Icon';


const Button = (props) => {
  const { label, className, icon } = props;
  const combinedClassName = `${className} btn-flat waves-effect waves-light`;

  return (
    <button
      {...props}
      type="button"
      className={combinedClassName}
    >
      <span>{label}</span>
      {icon ? (<Icon icon={icon} className="left" />) : null}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  icon: null,
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  icon: propTypes.string,
  className: propTypes.string,
};

export default Button;
