/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import constants from '../constants';

const Button = styled.a`
border-radius: 270px;
background-color: ${constants.primaryColor} !important;
color: ${constants.navFontColor} !important;
`;

// remove unused var exception if we will implement action bindings
const NavButton = (props) => {
  const { label, icon, className } = props;
  const combinedClass = `${className} waves-effect btn`;

  return (
    <Button {...props} className={combinedClass}>
      <span>{label}</span>
      <i className="material-icons left">{icon}</i>
    </Button>
  );
};

NavButton.defaultProps = {
  className: '',
};

NavButton.propTypes = {
  label: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  className: propTypes.string,
};

export default NavButton;
