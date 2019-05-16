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
  const { label, icon, onClick: clickHandler } = props;
  return (
    <Button onClick={e => clickHandler(e, props)} className="waves-effect btn">
      <span>{label}</span>
      <i className="material-icons left">{icon}</i>
    </Button>
  );
};

NavButton.propTypes = {
  label: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default NavButton;
