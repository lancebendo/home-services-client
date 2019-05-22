import React from 'react';
import propTypes from 'prop-types';

import TileDiv from './tileStyle';

const Tile = (props) => {
  const { children } = props;
  return (
    <TileDiv className="row">
      {children}
    </TileDiv>
  );
};

Tile.propTypes = {
  children: propTypes.node.isRequired,
};

export default Tile;
