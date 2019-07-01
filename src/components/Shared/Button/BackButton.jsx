import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

import Icon from '../Icon';

const BackLink = styled(Link)`
  &:hover {
    background-color: ${constants.alternateColor};
  }
`;

const BackButton = ({ link }) => (
  <BackLink to={link} className="btn-floating btn-flat waves-effect">
    <Icon icon="arrow_back" />
  </BackLink>
);

BackButton.propTypes = {
  link: propTypes.string.isRequired,
};

export default BackButton;
