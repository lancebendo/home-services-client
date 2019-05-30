import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const Header = styled.div`
  font-size: ${constants.primaryHeaderFontSize};
`;

const PrimaryHeader = ({ children }) => (
  <Header>{children}</Header>
);

PrimaryHeader.propTypes = {
  children: propTypes.node.isRequired,
};

export default PrimaryHeader;
