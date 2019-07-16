import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../ReactConstants';

const TileListDiv = styled.div`
@media only screen and (min-width: ${constants.mediumScreen}) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: stretch;
    // justify-content: center;
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
