import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardContent } from '../Shared/FlatCard';
import TileList, { Tile, TileLink } from '../Shared/TileList';

const AddressTileList = (props) => {
  const { addresses } = props;

  return (
    <FlatCard {...props}>
      <FlatCardContent>
        <TileList>

          <TileLink label="+ Add new Address" />

          {addresses.map(address => (
            <Tile key={address.id}>
              <span>{`${address.houseNumber} ${address.street}`}</span>
              <br />
              <span>{address.subdivision}</span>
              <br />
              <span>{`${address.city}, ${address.province}`}</span>
            </Tile>
          ))}

        </TileList>
      </FlatCardContent>
    </FlatCard>
  );
};

AddressTileList.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default AddressTileList;
