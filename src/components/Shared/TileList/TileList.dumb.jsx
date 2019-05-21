import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const TileListDiv = styled.div`
@media (max-width: ${constants.largeScreen}) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: stretch;
}
`;

const TileList = ({ children }) => (
  <TileListDiv>
    {children}
  </TileListDiv>
);

TileList.propTypes = {
  children: propTypes.node.isRequired,
};

export default TileList;
